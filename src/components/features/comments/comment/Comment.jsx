import { useContext, useState } from "react";
import StyledComment from "./StyledComment";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import UsersContext from "../../../../contexts/users-context";
import CommentMenu from "../comment-menu/CommentMenu";
import CommentsContext, { COMMENTS_ACTIONS } from "../../../../contexts/comments-context";
import { useNavigate } from "react-router-dom";

const Comment = ({ comment }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [commentValue, setCommentValue] = useState(comment.text);
  const { dispatchComments } = useContext(CommentsContext);
  const { users: { users, loggedInUser } } = useContext(UsersContext);
  const navigate = useNavigate();

  const commentAuthor = users.find(user => user.id === comment.userId);

  const toggleOpenMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleEditOpen = () => setIsEditOpen(true);
  const handleEditClose = () => {
    setIsEditOpen(false);
    setCommentValue(comment.text);
  };

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
  };

  const currentUserLike = comment?.likes.find(like => like.userId === loggedInUser?.id);

  const handleLike = (value) => {
    if (!loggedInUser) {
      navigate('/login');
      return;
    }

    if (currentUserLike && currentUserLike.likeValue === value) {
      return;
    } else if (currentUserLike) {
      currentUserLike.likeValue = value;
      dispatchComments({
        type: COMMENTS_ACTIONS.UPDATE_LIKES,
        id: comment.id,
        likes: [...comment.likes],
      })
    } else {
      const newLike = {
        userId: loggedInUser.id,
        likeValue: value,
      };
      dispatchComments({
        type: COMMENTS_ACTIONS.UPDATE_LIKES,
        id: comment.id,
        likes: [...comment.likes, newLike],
      })
    };
  };

  const totalLikes = comment.likes.reduce((acc, curr) => acc + curr.likeValue, 0)


  return (
    <StyledComment>
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
      <div className="content">
        <img src={commentAuthor.picture} alt={commentAuthor.username} />
        <div className="wrapper">
          <div className="user-info">
            <span className="username">{commentAuthor.username}</span>
            <span className="time">{formatDistanceToNow(new Date(comment.dateCreated))} ago</span>
            {comment.wasEdited && (
              <div className="was-edited">
                <i className="fa-solid fa-pencil"></i>
                <span>Edited</span>
              </div>
            )}
          </div>
          {isEditOpen ? (
            <form className="edit-form" onSubmit={handleSubmit}>
              <textarea
                id="comment"
                value={commentValue}
                onChange={handleInputChange}
                placeholder="What are your thoughts?"
              />
              <div className="buttons">
                <button
                  type="button"
                  onClick={handleEditClose}
                >
                  <i className="fa-solid fa-xmark"></i>
                  Cancel
                </button>
                <button type="submit" disabled={commentValue.trim().length === 0} >
                  <i className="fa-solid fa-floppy-disk"></i>
                  Save
                </button>
              </div>
            </form>
          ) : (
            <p className="text">{comment.text}</p>
          )}
        </div>
      </div>
      <div className="votes">
        <i
          onClick={() => handleLike(1)}
          className="fa-solid fa-caret-up"></i>
        <span>{totalLikes}</span>
        <i
          onClick={() => handleLike(-1)}
          className="fa-solid fa-caret-down"></i>
      </div>
    </StyledComment>
  );
}

export default Comment;