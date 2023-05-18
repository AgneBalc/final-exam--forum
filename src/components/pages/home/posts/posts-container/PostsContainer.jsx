import { useContext } from "react";
import StyledPostsContainer from "./StyledPostsContainer";
import PostsContext from "../../../../../contexts/posts-context";
import Post from "../post/Post";
import CreatePost from "../create-post/CreatePost";

const PostsContainer = () => {
  const { posts } = useContext(PostsContext);

  return (
    <StyledPostsContainer>
      <CreatePost />
      {posts.map(post =>
        <Post
          key={post.id}
          post={post}
        />
      )}
    </StyledPostsContainer>
  );
}

export default PostsContainer;