import { useContext } from "react";
import EmptyTab from "../empty-tab/EmptyTab";
import PostsContext from "../../../../contexts/posts-context";
import Post from "../../home/posts/post/Post";
import StyledUserLikes from "./StyledUserLikes";

const UserLikes = ({ loggedInUser }) => {
  const { posts } = useContext(PostsContext);

  const likedPosts = posts.filter(post =>
    post.likes.find(like => like.userId === loggedInUser.id && like.likeValue === 1)
  )

  const message = `hmm... looks like you haven't liked anything yet`;

  return (
    <StyledUserLikes>
      {likedPosts.length ? (
        likedPosts.map(post =>
          <Post
            className='all-posts'
            key={post.id}
            post={post}
          />
        )
      ) : (
        <EmptyTab message={message} />
      )}
    </StyledUserLikes>
  );
}

export default UserLikes;