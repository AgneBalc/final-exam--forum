import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Signup from './components/pages/signup/Signup';
import Login from './components/pages/login/Login';

function App() {
  return (
    <>
      <Header />
      {/* <Signup /> */}
      <Login />
    </>
  );
}

export default App;
