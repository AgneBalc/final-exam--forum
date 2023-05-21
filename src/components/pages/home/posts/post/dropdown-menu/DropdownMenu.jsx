import { useContext } from "react";
import StyledDropdownMenu from "./StyledDropdown";
import Modal from "../../../../../UI/modal/Modal";
import EditPost from "../edit-post/EditPost";
import PostsContext from "../../../../../../contexts/posts-context";

const DropdownMenu = ({ post }) => {
  const { toggleModal, handleModalClose, isEditModalOpen } = useContext(PostsContext);

  return (
    <StyledDropdownMenu>
      <div className="edit"
        onClick={toggleModal}
      >
        <i className="fa-solid fa-pencil"></i>
        <span>Edit post</span>
      </div>
      {isEditModalOpen && (
        <Modal onClose={handleModalClose}>
          <EditPost post={post} />
        </Modal>
      )}
      <div className="delete">
        <i className="fa-regular fa-trash-can"></i>
        <span>Delete post</span>
      </div>
    </StyledDropdownMenu>
  );
}

export default DropdownMenu;