import React, { RefObject, useMemo, useRef, useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { AiFillCheckCircle, AiTwotoneEdit } from 'react-icons/ai';
import { DeleteOneEmployeeInput, Employee, useDeleteOneEmployeeMutation } from '../graphql/generated';
import { useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Alert } from 'react-bootstrap';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { LinkContainer } from 'react-router-bootstrap';
import { AlertData } from '../pages/EmployeesPage';
import { toast } from 'react-toastify';

interface Props extends ICellRendererParams<Employee> {
  refetch: () => void;
  gridRef: RefObject<AgGridReact<Employee>>
}


export default function EditUpdateCell({ data, refetch, api, gridRef }: Props) {
  const queryClient = useQueryClient();
  const deleteOneEmployeeMutation = useDeleteOneEmployeeMutation<{ message: string, stack: string }>({ endpoint: "graphql", fetchParams: { headers: { "Content-type": "application/json" } } }, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['GetEmployees']);
      // refetch();
      if (gridRef.current && data) {
        gridRef.current.api.applyTransaction({ remove: [data] });
      }
    }
  });

  return (
    <>
      <div className='d-flex justify-content-evenly align-items-center'>
        {deleteOneEmployeeMutation.isIdle &&
          <>
            <LinkContainer to={`/update/${data?._id}`}><button className='btn btn-outline-warning btn-sm' ><AiTwotoneEdit /></button></LinkContainer>
            <button className='btn btn-outline-danger btn-sm' onClick={() => { data && deleteOneEmployeeMutation.mutate({ query: { _id: data._id } }) }}><RiDeleteBin6Fill /></button>
          </>
        }
        {deleteOneEmployeeMutation.isLoading &&
          <>
            <LinkContainer to={`/update/${data?._id}`}><button className='btn btn-outline-warning btn-sm' ><AiTwotoneEdit /></button></LinkContainer>
            <button className='btn btn-outline-danger btn-sm'><><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></></button>
          </>
        }
        <>
          {deleteOneEmployeeMutation.isError && toast(deleteOneEmployeeMutation.error.message, { type: 'error' })}
          {deleteOneEmployeeMutation.isError && deleteOneEmployeeMutation.reset()}
        </>
      </div>
      {/* {console.log(deleteOneEmployeeMutation)} */}
    </>
  )
};