import { Link } from "react-router-dom";
import Button from "../UI/button/Button";
import StyledHeader from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-container">
        <Link to={'/'}>
          <img
            src="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/2/c/3/2c3f27b5c405e42409512a8b6ced8adde4609f13.png"
            alt="logo"
          />
        </Link>
        <div className="btn-container">
          <Link to='/login'>
            <Button>Log in</Button>
          </Link>
          <Link to='/signup'>
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;