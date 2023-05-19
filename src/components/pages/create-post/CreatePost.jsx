import { useState } from "react";
import StyledCreatePost from "./StyledCreatePost";
// import Button from "../../UI/button/Button";

const formTabs = [
  {
    title: "Post",
    icon: "fa-solid fa-file-lines"
  },
  {
    title: "Image",
    icon: "fa-regular fa-image"
  }
];

const CreatePost = () => {
  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);

  return (
    <StyledCreatePost>
      <div className="tabs">
        {formTabs.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(item.title)}
            className={item.title === selectedTab ? 'selected' : ''}
          >
            <i className={item.icon}></i>
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      {/* <form>
        <input type="text" />
        <textarea name="" id="" />
        <input type="url" />
        <div>
          <Button>Cancel</Button>
          <Button>Post</Button>
        </div>
      </form> */}
    </StyledCreatePost>
  );
}

export default CreatePost;