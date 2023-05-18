import { useContext } from "react";
import StyledPostsContainer from "./StyledPostsContainer";
import PostsContext from "../../../../../contexts/posts-context";
import Post from "../post/Post";

const PostsContainer = () => {
  const { posts } = useContext(PostsContext);

  return (
    <StyledPostsContainer>
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