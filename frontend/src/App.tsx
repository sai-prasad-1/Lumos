
import './App.css';
import Navbar from './components/Navbar';
import { Link, Navigate } from "react-router-dom";
import Home from './pages/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';

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
    </Routes>
    </>
  );
}

export default App;
