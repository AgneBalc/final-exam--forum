import { useContext } from "react";
import StyledPostPage from "./StyledPostPage";
import PostsContext from "../../../contexts/posts-context";
import { useParams } from "react-router-dom";
import Post from "../home/posts/post/Post";
import CommentsContext from "../../../contexts/comments-context";
import Comment from "../../features/comments/Comment";
import UsersContext from "../../../contexts/users-context";
import CreateComment from "../../features/comments/create-comment/CreateComment";

const PostPage = () => {
  const { posts } = useContext(PostsContext);
  const { comments } = useContext(CommentsContext);
  const { users: { isLoggedIn, loggedInUser } } = useContext(UsersContext);
  const { id } = useParams();

  const post = posts.find(post => post.id === id)
  const currentPostComments = comments.filter(comment => comment.postId === id);

  return (
    <StyledPostPage>
      <Post
        post={post}
      />
      {isLoggedIn && (
        <CreateComment
          loggedInUser={loggedInUser}
          post={post}
        />
      )
      }
      <section className="comments">
        {currentPostComments.map(comment =>
          <Comment
            key={comment.id}
            comment={comment}
          />)}
      </section>
    </StyledPostPage>
  );
}

export default PostPage;