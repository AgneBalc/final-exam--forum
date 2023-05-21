import { createContext, useEffect, useReducer } from "react";

const PostsContext = createContext();

const POSTS_ACTIONS = {
  GET: 'get_all_posts',
  ADD: 'add_new_post',
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
    default:
      return state;
  }
}

const PostsProvider = ({ children }) => {
  const [posts, dispatchPosts] = useReducer(postsReducer, []);

  useEffect(() => {
    fetch('http://localhost:8080/posts')
      .then(res => res.json())
      .then(data => dispatchPosts({
        type: POSTS_ACTIONS.GET,
        data,
      }))
  }, []);
  console.log(posts);

  return (
    <PostsContext.Provider
      value={{
        posts,
        dispatchPosts
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export { PostsProvider, POSTS_ACTIONS };

export default PostsContext;