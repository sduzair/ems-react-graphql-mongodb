import React, { LegacyRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { ColDef, ColGroupDef, GetRowIdFunc, GetRowIdParams } from 'ag-grid-community';
import { Employee, GetEmployeesQuery, useGetEmployeesQuery } from '../graphql/generated';
import EditUpdateCell from '../components/EditUpdateCell';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props { }

export interface AlertData {
  message: string;
  variant: string;
}

export default function EmployeesPage({ }: Props) {

  const { data: eData, status: eStatus, error: eError, refetch, fetchStatus } = useGetEmployeesQuery<GetEmployeesQuery>({ endpoint: "graphql", fetchParams: { headers: { "Content-type": "application/json" } } }, { limit: 100 }, { staleTime: Infinity })
  // console.log(useGetEmployeesQuery.getKey({
  //   limit: 100
  // }))

  const gridRef = useRef<AgGridReact<Employee>>(null);
  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState<(ColDef<Employee> | ColGroupDef<Employee>)[]>([
    { headerName: 'Update/Delete', width: 150, cellRenderer: EditUpdateCell, cellRendererParams: { refetch, gridRef }, filter: false, sortable: false, resizable: false },
    { headerName: 'Row ID', valueGetter: 'node.id', width: 100, maxWidth: 250 },
    { field: 'firstName', width: 90 },
    { field: 'lastName', width: 120 },
    {
      headerName: 'Company',
      children: [
        { headerName: 'Name', field: 'company.name', maxWidth: 300 },
        {
          headerName: 'Date of Joining', valueGetter: (eData) => {
            if (eData.data) {
              return new Date(eData.data.company.dateOfJoining).toLocaleDateString("en-CA")
            } else {
              return 'N/A'
            }
          }, width: 150, maxWidth: 250
        },
        { headerName: 'Status', field: 'company.status', width: 140, maxWidth: 180 },
        {
          headerName: 'Date of Retirement', valueGetter: (eData) => {
            if (eData.data) {
              const birthDate = new Date(eData.data.birthDate)
              return new Date(birthDate.setFullYear(birthDate.getFullYear() + 65)).toLocaleDateString("en-CA")
            } else {
              return 'N/A'
            }
          }, width: 150, maxWidth: 250
        },
        {
          headerName: 'Is Retirement in 6 months?', valueGetter: (eData) => {
            if (!eData.data) return 'No data';
            const today = new Date();
            const birthDate = new Date(eData.data.birthDate)
            const dateOfRetirement = new Date(birthDate.setFullYear(birthDate.getFullYear() + 65))
            const sixMonthsFromNow = new Date()
            sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6)
            if (today < dateOfRetirement && dateOfRetirement < sixMonthsFromNow) {
              return 'True'
            }
            return 'False'
          }, width: 220, maxWidth: 250
        },
        { headerName: 'Type', field: 'company.employeeType', width: 120 },
        { headerName: 'Department', field: 'company.department', maxWidth: 250 },
        { headerName: 'Role', field: 'company.title' },
        { headerName: 'Address', field: 'company.address.address', columnGroupShow: 'open', maxWidth: 400 },
        { headerName: 'City', field: 'company.address.city', width: 120, columnGroupShow: 'closed' },
        { headerName: 'State', field: 'company.address.state', width: 90, columnGroupShow: 'closed' },
        { headerName: 'Postal Code', field: 'company.address.postalCode', width: 150, columnGroupShow: 'closed' },
      ],
      marryChildren: true
    },
    { field: 'email', maxWidth: 300 },
    { headerName: 'City', field: 'address.city', width: 120 },
    { headerName: 'State', field: 'address.state', width: 90 },
    { headerName: 'Postal Code', field: 'address.postalCode', width: 150 },

  ]);
  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo<ColDef<Employee>>(() => ({
    sortable: true,
    filter: true,
    resizable: true,
    maxWidth: 200,
  }), []);

  const containerStyle = useMemo(() => ({ width: '100%', height: `calc(100vmin - 56px)` }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const getRowId = useMemo<GetRowIdFunc>(() => {
    return (params: GetRowIdParams<Employee>) => params.data._id;
  }, []);
  // Example of consuming Grid Event
  // const cellClickedListener = useCallback((event: any) => {
  //   console.log('cellClicked', event);
  // }, []);
  return (
    <>
      <ToastContainer position='bottom-right' pauseOnHover />
      {eStatus == 'loading' &&
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
      {fetchStatus == 'fetching' &&
        <div className="position-absolute d-flex justify-content-center top-0 end-0 me-2 mt-2">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Fetching...</span>
          </div>
        </div>
      } 
      {eStatus == 'error' && <span>Error: {eError as string}</span>}
      {eStatus == 'success' &&
        <div style={containerStyle}>
          <div style={gridStyle} className="ag-theme-alpine">
            <AgGridReact
              ref={gridRef} // Ref for accessing Grid's API

              rowData={eData.employees} // Row Data for Rows

              columnDefs={columnDefs} // Column Defs for Columns
              defaultColDef={defaultColDef} // Default Column Properties

              animateRows={true} // Optional - set to 'true' to have rows animate when sorted
              // rowSelection='multiple' // Options - allows click selection of rows

              // onCellClicked={cellClickedListener} // Optional - registering for Grid Event
              getRowId={getRowId}
            // enableCellChangeFlash={true}
            ></AgGridReact>
          </div>
        </div>
      }
    </>
  )
}
