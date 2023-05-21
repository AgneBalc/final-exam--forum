import { useContext } from "react";
import StyledPost from "./StyledPost";
import UsersContext from "../../../../../contexts/users-context";

const Post = ({ post }) => {
  const { users: { users } } = useContext(UsersContext);

  const postAuthor = users.find(user => user.id === post.userId);

  return (
    <StyledPost>
      <div className="votes">
        {/* <i className="fa-solid fa-caret-up"></i> */}
        <i className="fa-solid fa-up-long"></i>
        <span>{post.likes}</span>
        {/* <i className="fa-solid fa-caret-down"></i> */}
        <i className="fa-solid fa-down-long"></i>
      </div>
      <div className="content">
        {/* SUTVARKYTIT DATA!!!! */}
        <p>Posted by {postAuthor.username} xx hours ago</p>
        <h2>{post.title}</h2>
        {post.image &&
          <img src={post.image} alt={post.title} />}
        {post.text &&
          <p className="text">{post.text}</p>}
      </div>
      <div className="comments">
        <i className="fa-regular fa-message"></i>
        {/* SUTVARKYTIT KOMENTARU SKAICIU!!!! */}
        <p>3 Comments</p>
      </div>
    </StyledPost>
  );
}

export default Post;