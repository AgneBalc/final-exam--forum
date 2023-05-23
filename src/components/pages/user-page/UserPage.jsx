import { useContext, useState } from "react";
import StyledUserPage from "./StyledUserPage";
import UserPosts from "./user-posts/UserPosts";
import UsersContext from "../../../contexts/users-context";
import UserComments from "./user-comments/UserComments";
import UserLikes from "./user-likes/UserLikes";
import UserDislikes from "./user-dislikes/UserDislikes";
import { Link } from "react-router-dom";

const navTabs = [
  'POSTED',
  'COMMENTED',
  'LIKED',
  'DISLIKED'
]

const UserPage = () => {
  const { users: { loggedInUser } } = useContext(UsersContext);
  const [selectedTab, setSelectedTab] = useState(navTabs[0]);

  return (
    <StyledUserPage>
      <nav className="tabs">
        <ul>
          {navTabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => setSelectedTab(tab)}
              className={tab === selectedTab ? 'selected' : ''}
            >{tab}</li>
          ))}
        </ul>
      </nav>
      {selectedTab === 'POSTED' &&
        <UserPosts loggedInUser={loggedInUser} />
      }
      {selectedTab === 'COMMENTED' &&
        <UserComments loggedInUser={loggedInUser} />
      }
      {selectedTab === 'LIKED' &&
        <UserLikes loggedInUser={loggedInUser} />
      }
      {selectedTab === 'DISLIKED' &&
        <UserDislikes loggedInUser={loggedInUser} />
      }
    </StyledUserPage>
  );
}

export default UserPage;