import Button from "../../UI/button/Button";
import StyledCreatePost from "./StyledCreatePost";

const CreatePost = () => {
  return (
    <StyledCreatePost>
      <div>
        <button>Post</button>
        <button>Image</button>
      </div>
      <form>
        <input type="text" />
        <textarea name="" id="" />
        <input type="url" />
        <div>
          <Button>Cancel</Button>
          <Button>Post</Button>
        </div>
      </form>
    </StyledCreatePost>
  );
}

export default CreatePost;