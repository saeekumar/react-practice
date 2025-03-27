import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AppNavbar from './component/Navbar';
import Footer from './component/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import EmployeeList from './pages/EmployeeList';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employees-list" element={<EmployeeList />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
