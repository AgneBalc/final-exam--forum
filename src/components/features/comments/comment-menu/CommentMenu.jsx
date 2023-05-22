import { useContext } from "react";
import CommentsContext, { COMMENTS_ACTIONS } from "../../../../contexts/comments-context";
import StyledCommentMenu from "./StyledCommentMenu";

const CommentMenu = ({ comment, toggleOpenMenu, handleEditOpen }) => {
  const { dispatchComments } = useContext(CommentsContext);

  const handleEditComment = () => {
    handleEditOpen();
    toggleOpenMenu();
  }

  const handleDeleteComment = () => dispatchComments({
    type: COMMENTS_ACTIONS.DELETE,
    id: comment.id
  });

  return (
    <StyledCommentMenu>
      <div
        className="edit"
        onClick={handleEditComment}
      >
        <i className="fa-solid fa-pencil"></i>
        <span>Edit comment</span>
      </div>
      <div
        className="delete"
        onClick={handleDeleteComment}
      >
        <i className="fa-regular fa-trash-can"></i>
        <span>Delete comment</span>
      </div>
    </StyledCommentMenu>
  );
}

export default CommentMenu;