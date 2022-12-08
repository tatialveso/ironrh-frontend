import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextComponent } from './contexts/authContext';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Register from './components/User/Register';
import Login from './components/User/Login';
import Profile from './components/User/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import EmployeeList from './components/Employee/EmployeeList'
import AddEmployee from './components/Employee/AddEmployee'
import EmployeeDetails from './components/Employee/EmployeeDetails';
import NavigationBar from './components/NavigationBar';
import TodoList from './components/Todo/TodoList';
import AddTodo from './components/Todo/AddTodo';

function App() {
  const [todoForm, setTodoForm] = useState({
    title: "",
    description: "",
    progress: "",
    deadline: ""
  })

  const [userForm, setUserForm] = useState({
    name: "",
    salary: "",
    email: "",
    phone: "",
    department: "",
    admissionDate: "",
    status: "",
    active: true,
    address: {
      city: "",
      state: ""
    }
  })

  return (
    <div className="App">
      <AuthContextComponent>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/funcionarios"
            element={
              <ProtectedRoute>
                <EmployeeList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/funcionarios/adicionar"
            element={
              <ProtectedRoute>
                <AddEmployee userForm={userForm} setUserForm={setUserForm} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/funcionarios/:id"
            element={
              <ProtectedRoute>
                <EmployeeDetails userForm={userForm} setUserForm={setUserForm} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tarefas"
            element={
              <ProtectedRoute>
                <TodoList todoForm={todoForm} setTodoForm={setTodoForm} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tarefas/nova-tarefa"
            element={
              <ProtectedRoute>
                <AddTodo todoForm={todoForm} setTodoForm={setTodoForm} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}

export default App;
