import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './contexts/users-context';
import { PostsProvider } from './contexts/posts-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PostsProvider>
    <UsersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersProvider>
  </PostsProvider>
);
