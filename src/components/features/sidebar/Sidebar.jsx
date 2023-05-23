import { Link } from "react-router-dom";
import StyledSidebar from "./StyledSidebar";
import { useContext } from "react";
import UsersContext from "../../../contexts/users-context";

const Sidebar = () => {
  const { users: { isLoggedIn } } = useContext(UsersContext);

  return (
    <StyledSidebar>
      <div>
        <h3>About</h3>
        <div className="content">
          <p>A forum for all questions, humor and jokes relating to programmers and programming.</p>
          {isLoggedIn && (
            <Link to='/add'>
              <button>Create Post</button>
            </Link>
          )}
        </div>
      </div>
      <div>
        <h3>Rules</h3>
        <div className="content">
          <ol>
            <li>No off-topic posts</li>
            <li>No reposts</li>
            <li>No low-quality content</li>
            <li>Any common post will be removed if it's not novel</li>
            <li>Put effort into your titles</li>
            <li>No spam or tasteless self-promotion</li>
          </ol>
        </div>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;