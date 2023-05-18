import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Signup from './components/pages/signup/Signup';
import Login from './components/pages/login/Login';
import Home from './components/pages/home/Home';
import CreatePost from './components/pages/create-post/CreatePost';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/add' element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default App;
