import { createContext, useReducer } from "react";

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [posts, dispatchPosts] = useReducer(postsReducer, []);

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