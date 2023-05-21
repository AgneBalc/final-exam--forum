import { createContext, useEffect, useReducer, useState } from "react";

const PostsContext = createContext();

const POSTS_ACTIONS = {
  GET: 'get_all_posts',
  ADD: 'add_new_post',
  EDIT: 'edit_post',
  DELETE: 'delete_post',
}

const postsReducer = (state, action) => {
  switch (action.type) {
    case POSTS_ACTIONS.GET:
      return action.data;
    case POSTS_ACTIONS.ADD:
      fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action.post)
      });
      return [action.post, ...state];
    case POSTS_ACTIONS.EDIT:
      return state.map(post => {
        if (post.id === action.post.id) {
          fetch(`http://localhost:8080/posts/${action.post.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: action.post.title,
              text: action.post.text,
              image: action.post.image,
              wasEdited: true
            })
          });
          return {
            ...post,
            title: action.post.title,
            text: action.post.text,
            image: action.post.image,
            wasEdited: true
          }
        } else {
          return post;
        };
      });
    case POSTS_ACTIONS.DELETE:
      fetch(`http://localhost:8080/posts/${action.id}`, {
        method: 'DELETE'
      });
      return state.filter(post => post.id !== action.id);
    default:
      return state;
  }
}

const PostsProvider = ({ children }) => {
  const [posts, dispatchPosts] = useReducer(postsReducer, []);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/posts')
      .then(res => res.json())
      .then(data => dispatchPosts({
        type: POSTS_ACTIONS.GET,
        data,
      }))
  }, []);

  const handleModalClose = () => setIsEditModalOpen(false);
  const toggleModal = () => setIsEditModalOpen(!isEditModalOpen);

  return (
    <PostsContext.Provider
      value={{
        posts,
        dispatchPosts,
        handleModalClose,
        isEditModalOpen,
        toggleModal
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export { PostsProvider, POSTS_ACTIONS };

export default PostsContext;