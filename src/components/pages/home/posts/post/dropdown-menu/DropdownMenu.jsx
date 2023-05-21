import StyledDropdownMenu from "./StyledDropdown";

const DropdownMenu = ({ onClose }) => {
  return (
    <StyledDropdownMenu>
      <div className="edit">
        <i className="fa-solid fa-pencil"></i>
        <span>Edit post</span>
      </div>
      <div className="delete">
        <i className="fa-regular fa-trash-can"></i>
        <span>Delete post</span>
      </div>
    </StyledDropdownMenu>
  );
}

export default DropdownMenu;