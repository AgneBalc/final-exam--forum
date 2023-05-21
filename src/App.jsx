import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Signup from './components/pages/signup/Signup';
import Login from './components/pages/login/Login';
import Home from './components/pages/home/Home';
import CreatePost from './components/pages/create-post/CreatePost';
import { useContext } from 'react';
import UsersContext from './contexts/users-context';
import PostPage from './components/pages/post/PostPage';

function App() {
  const { users: { isLoggedIn } } = useContext(UsersContext);
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/add' element={isLoggedIn ? <CreatePost /> : <Navigate to='/login' />} />
        <Route path='/post/:id' element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;
