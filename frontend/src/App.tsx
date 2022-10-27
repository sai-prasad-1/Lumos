
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

function App() {
  return (
    <>
    <Routes>
    <Route
        path="*"
        element={<Navigate to="/home" />}
    />

      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
    </>
  );
}

export default App;
