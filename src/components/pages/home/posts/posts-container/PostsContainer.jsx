import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StyledPostsContainer from "./StyledPostsContainer";
import PostsContext from "../../../../../contexts/posts-context";
import Post from "../post/Post";
import UsersContext from "../../../../../contexts/users-context";
import Filter from "../../../../features/filter/Filter";
import CommentsContext from "../../../../../contexts/comments-context";

const PostsContainer = () => {
  const { posts } = useContext(PostsContext);
  const { comments } = useContext(CommentsContext);
  const { users: { isLoggedIn, loggedInUser } } = useContext(UsersContext);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const filterPostsFunc = () => {
    switch (selectedFilter) {
      case 'Best':
        posts.forEach(post => {
          const totalLikes = post.likes.reduce((acc, curr) => acc + curr.likeValue, 0)
          post.totalLikes = totalLikes;
        });
        return posts.sort((a, b) => b.totalLikes - a.totalLikes);
      case 'New':
        posts.forEach(post => post.dateCreated = new Date(post.dateCreated))
        return posts.sort((a, b) => b.dateCreated - a.dateCreated);
      case 'Active':
        posts.forEach(post => {
          const totalComments = comments.filter(comment => comment.postId === post.id).length;
          post.totalComments = totalComments;
        });
        return posts.filter(post => post.totalComments > 0)
      case 'Inactive':
        posts.forEach(post => {
          const totalComments = comments.filter(comment => comment.postId === post.id).length;
          post.totalComments = totalComments;
        });
        return posts.filter(post => post.totalComments === 0)
      default:
        return posts;
    }
  };

  const filterPosts = filterPostsFunc();

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
      {filterPosts?.length === 0 ? (
        <p>Loading...</p>
      ) : (
        filterPosts.map(post =>
          <Post
            className='all-posts'
            post={post}
            key={post.id}
          />
        )
      )}
    </StyledPostsContainer>
  );
}

export default PostsContainer;