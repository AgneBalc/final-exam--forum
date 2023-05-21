import { useState } from "react";
import StyledDropdownMenu from "./StyledDropdown";
import Modal from "../../../../../UI/modal/Modal";
import EditPost from "../edit-post/EditPost";

const DropdownMenu = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <StyledDropdownMenu>
      <div className="edit"
        onClick={toggleModal}
      >
        <i className="fa-solid fa-pencil"></i>
        <span>Edit post</span>
      </div>
      {isModalOpen && (
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