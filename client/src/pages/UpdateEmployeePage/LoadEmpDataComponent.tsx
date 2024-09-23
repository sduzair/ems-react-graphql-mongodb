import Alert from 'react-bootstrap/Alert'
import type { GetOneEmployeeQuery } from '../../graphql/generated'
import { useGetOneEmployeeQuery } from '../../graphql/generated'
import UpdateEmployeeForm from './UpdateEmployeeForm'
import { FiAlertTriangle } from 'react-icons/fi'

interface Props {
  _id: string
}

export default function LoadEmpDataComponent({ _id }: Props) {

  const { data: eData, isLoading, isSuccess, isError, error, isFetching } = useGetOneEmployeeQuery<GetOneEmployeeQuery>({ endpoint: "graphql", fetchParams: { headers: { "Content-type": "application/json" } } }, { query: { _id: _id } }, {
    staleTime: Infinity
  })

  return (
    <>
      {/* {isIdle && <button className='btn btn-outline-primary btn-lg' type="submit" onClick={() => console.log(errors)}>
              Submit</button>} */}
      {isLoading &&
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>}
      {isFetching &&
        <div className="position-absolute d-flex justify-content-center top-0 end-0 me-2 mt-2">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Fetching...</span>
          </div>
        </div>}
      {isSuccess &&
        <>
        <UpdateEmployeeForm initialFormData={eData} getOneEmployeeQueryKey={useGetOneEmployeeQuery.getKey({ query: { _id: _id } })}></UpdateEmployeeForm>
        </>
      }
      {isError &&
        <div className='position-absolute bottom-0 end-0 p-0 fs-5'>
          <Alert variant={"failure"} className='p-2 d-flex justify-content-between align-content-center align-items-center'><FiAlertTriangle /><div className='ms-2'>Error loading employee data</div></Alert>
        </div>
      }
    </>
  )
}