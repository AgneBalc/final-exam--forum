import { useContext, useState } from "react";
import { v4 as generatedId } from 'uuid';
import CommentsContext, { COMMENTS_ACTIONS } from "../../../../contexts/comments-context";

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
    <section>
      <p>Comment as {loggedInUser.username}</p>
      <form onSubmit={handleSubmit}>
        <textarea
          id="comment"
          value={commentValue}
          onChange={handleInputChange}
          placeholder="What are your thoughts?"
        />
        {commentValue.trim().length === 0 ? (
          <button type="submit" disabled>Add</button>
        ) : (
          <button type="submit">Add</button>
        )}
      </form>
    </section>
  );
}

export default CreateComment;