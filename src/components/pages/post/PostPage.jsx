import { useContext } from "react";
import StyledPostPage from "./StyledPostPage";
import PostsContext from "../../../contexts/posts-context";
import { useParams } from "react-router-dom";
import Post from "../home/posts/post/Post";

const PostPage = () => {
  const { posts } = useContext(PostsContext);
  const { id } = useParams();

  const post = posts.find(post => post.id === id)

  return (
    <StyledPostPage>
      <Post post={post} />
    </StyledPostPage>
  );
}

export default PostPage;