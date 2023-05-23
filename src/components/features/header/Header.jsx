import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../UI/button/Button";
import StyledHeader from "./StyledHeader";
import UsersContext, { USERS_ACTIONS } from "../../../contexts/users-context";

const Header = () => {
  const { users: { loggedInUser }, dispatchUsers } = useContext(UsersContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatchUsers({ type: USERS_ACTIONS.LOGOUT, });
    navigate('/');
  }

  return (
    <StyledHeader>
      <div className="header-container">
        <Link to={'/'}>
          <img
            src="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/2/c/3/2c3f27b5c405e42409512a8b6ced8adde4609f13.png"
            alt="logo"
          />
        </Link>
        {loggedInUser ? (
          <div className="loggedIn">
            <Link to={`/user/${loggedInUser.username}`}>
              <div className="user-info">
                <img src={loggedInUser.picture} alt={loggedInUser.username} />
                <span>{loggedInUser.username}</span>
              </div>
            </Link>
            <Button onClick={handleLogout}>Log out</Button>
          </div>
        ) : (
          <div className="btn-container">
            <Link to='/login'>
              <Button>Log in</Button>
            </Link>
            <Link to='/signup'>
              <Button>Sign up</Button>
            </Link>
          </div>
        )}
      </div>
    </StyledHeader>
  );
}

export default Header;