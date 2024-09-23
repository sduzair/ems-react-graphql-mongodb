import { useParams } from 'react-router-dom';
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