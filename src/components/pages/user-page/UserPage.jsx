import { useContext, useState } from "react";
import StyledUserPage from "./StyledUserPage";
import UsersContext from "../../../contexts/users-context";
import PostsContext from "../../../contexts/posts-context";
import CommentsContext from "../../../contexts/comments-context";
import EmptyTab from "../../features/empty-tab/EmptyTab";
import Post from "../../features/posts/post/Post";


const UserPage = () => {
  const { users: { loggedInUser } } = useContext(UsersContext);
  const { posts } = useContext(PostsContext);
  const { comments } = useContext(CommentsContext);
  const [selectedTab, setSelectedTab] = useState('POSTED');

  const createdPosts = posts.filter(post => post.userId === loggedInUser.id);
  const commentedPosts = posts.filter(post => {
    return comments.some(comment => comment.postId === post.id && comment.userId === loggedInUser.id);
  });
  const likedPosts = posts.filter(post =>
    post.likes.find(like => like.userId === loggedInUser.id && like.likeValue === 1)
  )
  const dislikedPosts = posts.filter(post =>
    post.likes.find(like => like.userId === loggedInUser.id && like.likeValue === -1)
  )

  const navTabs = [
    {
      tabName: 'POSTED',
      ifEmptyMsg: `hmm... ${loggedInUser.username} hasn't posted anything`,
      posts: createdPosts,
    },
    {
      tabName: 'COMMENTED',
      ifEmptyMsg: `hmm... ${loggedInUser.username} hasn't commented on anything`,
      posts: commentedPosts,
    },
    {
      tabName: 'LIKED',
      ifEmptyMsg: `hmm... looks like you haven't liked anything yet`,
      posts: likedPosts,
    },
    {
      tabName: 'DISLIKED',
      ifEmptyMsg: `hmm... looks like you haven't disliked anything yet`,
      posts: dislikedPosts,
    }
  ]

  const tabData = navTabs.find(tab => selectedTab === tab.tabName)

  return (
    <StyledUserPage>
      <nav className="tabs">
        <ul>
          {navTabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => setSelectedTab(tab.tabName)}
              className={tab.tabName === selectedTab ? 'selected' : ''}
            >{tab.tabName}</li>
          ))}
        </ul>
      </nav>

      {tabData.posts.length ?
        (tabData.posts.map(post =>
          <Post
            key={post.id}
            post={post}
            className={'all-posts'}
          />
        )) : (
          <EmptyTab
            message={tabData.ifEmptyMsg}
          />
        )
      }
    </StyledUserPage>
  );
}

export default UserPage;