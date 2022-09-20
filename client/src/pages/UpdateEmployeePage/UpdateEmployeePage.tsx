import React, { useEffect, useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import SearchableAddressField from '../../components/SearchableAddressField';
import { EmployeeDepartmentEnum, EmployeeStatusEnum, EmployeeTitleEnum, EmployeeTypeEnum, Exact, GetOneEmployeeQuery, OneEmployeeQueryInput, useGetOneEmployeeQuery, useUpdateOneEmployeeMutation } from '../../graphql/generated';
import { EmployeeCreateForm, employeeDepartmentOptions, employeeTitleOptions, employeeTypeOptions, phoneRegex } from '../CreateEmployeePage';
import LoadEmpDataComponent from './LoadEmpDataComponent';

interface Props { }

export default function UpdateEmployeePage(props: Props) {

  const { _id } = useParams()
  return (
    <>
      {_id && <LoadEmpDataComponent _id={_id}></LoadEmpDataComponent>}
    </>
  )
}