import { useContext } from "react";
import EmptyTab from "../empty-tab/EmptyTab";
import CommentsContext from "../../../contexts/comments-context";
import PostsContext from "../../../contexts/posts-context";
import StyledUserComments from "./StyledUserComments";
import Post from "../posts/post/Post";

const UserComments = ({ loggedInUser }) => {
  const { comments } = useContext(CommentsContext);
  const { posts } = useContext(PostsContext);

  const userComments = comments.filter(comment => comment.userId === loggedInUser.id);

  const commentedPosts = posts.filter(post => {
    return comments.some(comment => comment.postId === post.id && comment.userId === loggedInUser.id);
  });


  const message = `hmm... ${loggedInUser.username} hasn't commented on anything`;

  return (
    <StyledUserComments>
      {commentedPosts.length ? (
        commentedPosts.map(post =>
          <Post
            key={post.id}
            post={post}
            className='all-posts'
          />
        )
      ) : (
        <EmptyTab message={message} />
      )}
    </StyledUserComments>
  );
}

export default UserComments;