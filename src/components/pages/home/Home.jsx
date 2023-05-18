import StyledHome from "./StyledHome";
import PostsContainer from "./posts-container/PostsContainer";
import Post from "./posts/Post";

const Home = () => {
  return (
    <StyledHome>
      <h1>Memes, jokes and questions about programming</h1>
      <PostsContainer />
    </StyledHome>
  );
}

export default Home;