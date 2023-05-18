import { Link } from "react-router-dom";
import StyledCreatePost from "./StyledCreatePost";

const CreatePost = () => {
  return (
    <StyledCreatePost>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png" alt="" />
      <Link to='/add'>
        <input type="text" placeholder="Create Post" />
      </Link>
    </StyledCreatePost>
  );
}

export default CreatePost;