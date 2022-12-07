import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/User/Register';
import Login from './components/User/Login';
import Profile from './components/User/Profile';
import { AuthContextComponent } from './contexts/authContext';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorPage from './pages/ErrorPage';
import EmployeeList from './components/Employee/EmployeeList'
import AddEmployee from './components/Employee/AddEmployee'
import NavigationBar from './components/NavigationBar';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    name: "",
    salary: "",
    email: "",
    phone: "",
    department: "",
    admissionDate: "",
    status: "",
    active: true
  })

  return (
    <div className="App">
      <AuthContextComponent>
        <NavigationBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/registro" element={ <Register /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/perfil" element={ <ProtectedRoute Component={Profile} /> } />
          <Route path="/funcionarios" element={ <EmployeeList /> } />
          <Route path="/funcionarios/adicionar" element={ <AddEmployee form={form} setForm={setForm} /> } />
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}

export default App;
