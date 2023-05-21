import { useContext } from "react";
import StyledDropdownMenu from "./StyledDropdown";
import Modal from "../../../../../UI/modal/Modal";
import EditPost from "../edit-post/EditPost";
import PostsContext, { POSTS_ACTIONS } from "../../../../../../contexts/posts-context";

const DropdownMenu = ({ post }) => {
  const {
    toggleModal,
    handleModalClose,
    isEditModalOpen,
    dispatchPosts
  } = useContext(PostsContext);

  const handleDeletePost = () => dispatchPosts({
    type: POSTS_ACTIONS.DELETE,
    id: post.id
  });

  return (
    <StyledDropdownMenu>
      <div
        className="edit"
        onClick={toggleModal}
      >
        <i className="fa-solid fa-pencil"></i>
        <span>Edit post</span>
      </div>
      {isEditModalOpen && (
        <Modal onClose={handleModalClose} className='edit-modal'>
          <EditPost post={post} />
        </Modal>
      )}
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