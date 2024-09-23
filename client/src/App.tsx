import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './layout/Header';
import CreateEmployeePage from './pages/CreateEmployeePage';
import EmployeesPage from './pages/EmployeesPage';
import UpdateEmployeePage from './pages/UpdateEmployeePage/UpdateEmployeePage';

export default function App() {

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<EmployeesPage></EmployeesPage>}></Route>
        <Route path='/create' element={<CreateEmployeePage></CreateEmployeePage>}></Route>
        <Route path='/update/:_id' element={<UpdateEmployeePage></UpdateEmployeePage>}></Route>
      </Routes>
    </Router>
  );
}
