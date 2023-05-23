import { useContext, useEffect, useState } from "react";
import StyledPostPage from "./StyledPostPage";
import PostsContext from "../../../contexts/posts-context";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../home/posts/post/Post";
import CommentsContext from "../../../contexts/comments-context";
import Comment from "../../features/comments/Comment";
import UsersContext from "../../../contexts/users-context";
import CreateComment from "../../features/comments/create-comment/CreateComment";

const PostPage = () => {
  const { posts } = useContext(PostsContext);
  const { comments } = useContext(CommentsContext);
  const { users: { loggedInUser } } = useContext(UsersContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(post => post.id === id)
  const currentPostComments = comments.filter(comment => comment.postId === id);

  if (!posts.length) {
    return (
      <p>Loading...</p>
    )
  };

  return (
    <StyledPostPage>
      <button
        className="close"
        onClick={() => navigate('/')}
      >
        <i className="fa-solid fa-xmark"></i>
        <span>Close</span>
      </button>
      <Post
        className='post-page'
        post={post}
      />
      <section className="all-comments">
        {loggedInUser && (
          <CreateComment
            loggedInUser={loggedInUser}
            post={post}
          />
        )
        }
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