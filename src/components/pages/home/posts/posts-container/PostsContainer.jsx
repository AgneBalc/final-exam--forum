import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StyledPostsContainer from "./StyledPostsContainer";
import PostsContext from "../../../../../contexts/posts-context";
import Post from "../post/Post";
import UsersContext from "../../../../../contexts/users-context";
import Filter from "../../../../features/filter/Filter";

const PostsContainer = () => {
  const { posts } = useContext(PostsContext);
  const { users: { isLoggedIn, loggedInUser } } = useContext(UsersContext);
  const [selectedFilter, setSelectedFilter] = useState(null);

  if (selectedFilter === 'Best') {
    posts.forEach(post => {
      const totalLikes = post.likes.reduce((acc, curr) => acc + curr.likeValue, 0)
      post.totalLikes = totalLikes;
    });
    posts.sort((a, b) => b.totalLikes - a.totalLikes);
  }

  if (selectedFilter === 'New') {
    posts.forEach(post => post.dateCreated = new Date(post.dateCreated))
    posts.sort((a, b) => b.dateCreated - a.dateCreated);
  }

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
      <Filter
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
      />
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