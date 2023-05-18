import StyledPost from "./StyledPost";

const Post = ({ post }) => {
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
        <p>Posted by {post.username} xx hours ago</p>
        <h2>{post.title}</h2>
        {post.image &&
          <img src={post.image} alt={post.title} />}
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