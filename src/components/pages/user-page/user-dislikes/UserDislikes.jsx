import { useContext } from "react";
import EmptyTab from "../empty-tab/EmptyTab";
import PostsContext from "../../../../contexts/posts-context";
import Post from "../../home/posts/post/Post";
import StyledUserDislikes from "./StyledUserDislikes";

const UserDislikes = ({ loggedInUser }) => {
  const { posts } = useContext(PostsContext);

  const dislikedPosts = posts.filter(post =>
    post.likes.find(like => like.userId === loggedInUser.id && like.likeValue === -1)
  )

  const message = `hmm... looks like you haven't disliked anything yet`;

  return (
    <StyledUserDislikes>
      {dislikedPosts.length ? (
        dislikedPosts.map(post =>
          <Post
            key={post.id}
            post={post}
            className='all-posts'
          />
        )
      ) : (
        <EmptyTab message={message} />
      )}
    </StyledUserDislikes>
  );
}

export default UserDislikes;