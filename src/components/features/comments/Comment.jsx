import { useContext, useState } from "react";
import StyledComment from "./StyledComment";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import UsersContext from "../../../contexts/users-context";
import CommentMenu from "./comment-menu/CommentMenu";

const Comment = ({ comment }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { users: { users, loggedInUser } } = useContext(UsersContext);
  const commentAuthor = users.find(user => user.id === comment.userId);

  const toggleOpenMenu = () => setIsMenuOpen(!isMenuOpen);

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
      {isMenuOpen && <CommentMenu comment={comment} />}
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
        <p className="text">{comment.text}</p>
      </div>
    </StyledComment>
  );
}

export default Comment;