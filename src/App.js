import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/User/Register';
import Login from './components/User/Login';
import Profile from './components/User/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/registro" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/perfil" element={ <Profile /> } />
      </Routes>
    </div>
  );
}

export default App;
