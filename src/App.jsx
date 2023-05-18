import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Signup from './components/pages/signup/Signup';
import Login from './components/pages/login/Login';
import Home from './components/pages/home/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
