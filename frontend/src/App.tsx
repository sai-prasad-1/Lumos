
import './App.css';
import Navbar from './components/Navbar';
import { Link, Navigate } from "react-router-dom";
import Home from './pages/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  axios.defaults.baseURL = 'http://192.168.0.36:3000/';
  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  return (
    <>
    <ToastContainer
    position= "bottom-right"
    />
    <Routes>
    <Route
        path="*"
        element={<Navigate to="/home" />}
    />

      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    </>
  );
}

export default App;
