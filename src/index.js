import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './contexts/users-context';
import { PostsProvider } from './contexts/posts-context';
import { CommentsProvider } from './contexts/comments-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CommentsProvider>
    <PostsProvider>
      <UsersProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UsersProvider>
    </PostsProvider>
  </CommentsProvider>
);
