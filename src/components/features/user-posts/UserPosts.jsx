import { useContext } from "react";
import EmptyTab from "../empty-tab/EmptyTab";
import StyledUserPosts from "./StyledUserPosts";
import PostsContext from "../../../contexts/posts-context";
import Post from "../posts/post/Post";

const UserPosts = ({ loggedInUser }) => {
  const { posts } = useContext(PostsContext);
  const message = `hmm... ${loggedInUser.username} hasn't posted anything`;

  const userPosts = posts.filter(post => post.userId === loggedInUser.id);

  return (
    <StyledUserPosts>
      {userPosts.length ?
        (userPosts.map(post =>
          <Post
            key={post.id}
            post={post}
            className='all-posts'
          />
        )) : (
          <EmptyTab message={message} />
        )
      }
    </StyledUserPosts>
  );
}

export default UserPosts;