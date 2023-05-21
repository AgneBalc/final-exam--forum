import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import StyledPost from "./StyledPost";
import UsersContext from "../../../../../contexts/users-context";
import DropdownMenu from "./dropdown-menu/DropdownMenu";
import CommentsContext from "../../../../../contexts/comments-context";

const Post = ({ post }) => {
  const { users: { users, loggedInUser } } = useContext(UsersContext);
  const { comments } = useContext(CommentsContext);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const postAuthor = users.find(user => user.id === post.userId);

  const handleDropdownMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const totalComments = comments.filter(comment => comment.postId === post.id).length;

  return (
    <StyledPost>
      <div className="votes">
        <i className="fa-solid fa-up-long"></i>
        <span>{post.likes}</span>
        <i className="fa-solid fa-down-long"></i>
      </div>
      {post.wasEdited && (
        <div className="was-edited">
          <i className="fa-solid fa-pencil"></i>
          <span>Edited</span>
        </div>
      )}
      {loggedInUser && loggedInUser.id === postAuthor.id ? (
        <>
          <div
            className="openMenu"
            onClick={handleDropdownMenu}>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          {isUserMenuOpen && <DropdownMenu post={post} />}
        </>
      ) : null}
      <Link to={`/post/${post.id}`}>
        <div className="content">
          <p>Posted by {postAuthor.username} {formatDistanceToNow(new Date(post.dateCreated))} ago</p>
          <h2>{post.title}</h2>
          {post.image &&
            <img src={post.image} alt={post.title} />}
          {post.text &&
            <p className="text">{post.text}</p>}
        </div>
        <div className="comments">
          <i className="fa-regular fa-message"></i>
          <p>{totalComments} Comments</p>
        </div>
      </Link>
    </StyledPost>
  );
}

export default Post;