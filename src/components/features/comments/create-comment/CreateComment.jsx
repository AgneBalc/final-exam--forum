import { useContext, useState } from "react";
import { v4 as generatedId } from 'uuid';
import CommentsContext, { COMMENTS_ACTIONS } from "../../../../contexts/comments-context";
import StyledCreateComment from "./StyledCreateComent";

const CreateComment = ({ loggedInUser, post }) => {
  const [commentValue, setCommentValue] = useState('');
  const { dispatchComments } = useContext(CommentsContext);

  const handleInputChange = (e) => setCommentValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: generatedId(),
      userId: loggedInUser.id,
      postId: post.id,
      text: commentValue,
      likes: 0,
      wasEdited: false,
      dateCreated: new Date(),
    };
    dispatchComments({
      type: COMMENTS_ACTIONS.ADD,
      comment: newComment,
    });
    setCommentValue('');
  }

  return (
    <StyledCreateComment>
      <img src={loggedInUser.picture} alt={loggedInUser.username} />
      <form onSubmit={handleSubmit}>
        <textarea
          id="comment"
          value={commentValue}
          onChange={handleInputChange}
          placeholder="Write a comment..."
        />
        {commentValue.trim().length === 0 ? (
          <button type="submit" disabled><i className="fa-regular fa-paper-plane"></i></button>
        ) : (
          <button type="submit"><i className="fa-regular fa-paper-plane"></i></button>
        )}
      </form>
    </StyledCreateComment>
  );
}

export default CreateComment;