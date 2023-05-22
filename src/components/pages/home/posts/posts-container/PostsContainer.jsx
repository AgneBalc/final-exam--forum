import { useContext } from "react";
import { Link } from "react-router-dom";
import StyledPostsContainer from "./StyledPostsContainer";
import PostsContext from "../../../../../contexts/posts-context";
import Post from "../post/Post";
import UsersContext from "../../../../../contexts/users-context";
import Filter from "../../../../features/filter/Filter";

const PostsContainer = () => {
  const { posts } = useContext(PostsContext);
  const { users: { isLoggedIn, loggedInUser } } = useContext(UsersContext);

  return (
    <StyledPostsContainer>
      {isLoggedIn && (
        <div className="addPost">
          <img src={loggedInUser.picture} alt={loggedInUser.username} />
          <Link to='/add'>
            <input type="text" placeholder="Create Post" />
          </Link>
        </div>
      )}
      <Filter />
      {posts?.length === 0 ? (
        <p>Loading...</p>
      ) : (
        posts.map(post =>
          <Post
            post={post}
            key={post.id}
          />
        )
      )}
    </StyledPostsContainer>
  );
}

export default PostsContainer;