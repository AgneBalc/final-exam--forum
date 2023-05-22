import { useContext, useState } from "react";
import StyledComment from "./StyledComment";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import UsersContext from "../../../contexts/users-context";
import CommentMenu from "./comment-menu/CommentMenu";
import CommentsContext, { COMMENTS_ACTIONS } from "../../../contexts/comments-context";

const Comment = ({ comment }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [commentValue, setCommentValue] = useState(comment.text);
  const { dispatchComments } = useContext(CommentsContext);
  const { users: { users, loggedInUser } } = useContext(UsersContext);
  const commentAuthor = users.find(user => user.id === comment.userId);

  const toggleOpenMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleEditOpen = () => setIsEditOpen(true);
  const handleEditClose = () => setIsEditOpen(false);

  const handleInputChange = (e) => setCommentValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedComment = {
      id: comment.id,
      text: commentValue,
    };
    dispatchComments({
      type: COMMENTS_ACTIONS.EDIT,
      comment: editedComment,
    });
    handleEditClose();
  }

  return (
    <StyledComment>
      {comment.wasEdited && (
        <div className="was-edited">
          <i className="fa-solid fa-pencil"></i>
          <span>Edited</span>
        </div>
      )}
      {loggedInUser && loggedInUser.id === commentAuthor.id && (
        <div
          className="openMenu"
          onClick={toggleOpenMenu}
        >
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      )}
      {isMenuOpen && (
        <CommentMenu
          comment={comment}
          toggleOpenMenu={toggleOpenMenu}
          handleEditOpen={handleEditOpen} />
      )}
      <div className="votes">
        <i className="fa-solid fa-caret-up"></i>
        <span>{comment.likes}</span>
        <i className="fa-solid fa-caret-down"></i>
      </div>
      <div className="content">
        <div>
          <img src={commentAuthor.picture} alt={commentAuthor.username} />
          <span>{commentAuthor.username}</span>
          <span>{formatDistanceToNow(new Date(comment.dateCreated))} ago</span>
        </div>
        {isEditOpen ? (
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
        ) : (
          <p className="text">{comment.text}</p>
        )}
      </div>
    </StyledComment>
  );
}

export default Comment;