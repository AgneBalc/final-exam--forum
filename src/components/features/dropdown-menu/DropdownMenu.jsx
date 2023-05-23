import { useContext } from "react";
import StyledDropdownMenu from "./StyledDropdown";
import PostsContext, { POSTS_ACTIONS } from "../../../contexts/posts-context";

const DropdownMenu = ({ post, toggleDropdownMenu, handleModalOpen }) => {
  const { dispatchPosts } = useContext(PostsContext);

  const handleEditPost = () => {
    handleModalOpen();
    toggleDropdownMenu();
  }

  const handleDeletePost = () => dispatchPosts({
    type: POSTS_ACTIONS.DELETE,
    id: post.id
  });

  return (
    <StyledDropdownMenu>
      <div
        className="edit"
        onClick={handleEditPost}
      >
        <i className="fa-solid fa-pencil"></i>
        <span>Edit post</span>
      </div>
      <div
        className="delete"
        onClick={handleDeletePost}
      >
        <i className="fa-regular fa-trash-can"></i>
        <span>Delete post</span>
      </div>
    </StyledDropdownMenu>
  );
}

export default DropdownMenu;