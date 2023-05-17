import Button from "../UI/button/Button";
import StyledHeader from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-container">
        <img
          src="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/2/c/3/2c3f27b5c405e42409512a8b6ced8adde4609f13.png"
          alt="logo"
        />
        <div className="btn-container">
          <Button>Log in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;