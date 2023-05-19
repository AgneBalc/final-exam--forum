import { useContext } from "react";
import { Link } from "react-router-dom";
import StyledPostsContainer from "./StyledPostsContainer";
import PostsContext from "../../../../../contexts/posts-context";
import Post from "../post/Post";
import UsersContext from "../../../../../contexts/users-context";

const PostsContainer = () => {
  const { posts } = useContext(PostsContext);
  const { users: { isLoggedIn } } = useContext(UsersContext);

  return (
    <StyledPostsContainer>
      {isLoggedIn && (
        <div className="addPost">
          <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png" alt="" />
          <Link to='/add'>
            <input type="text" placeholder="Create Post" />
          </Link>
        </div>
      )}
      {posts.map(post =>
        <Post
          key={post.id}
          post={post}
        />
      )}
    </StyledPostsContainer>
  );
}

export default PostsContainer;