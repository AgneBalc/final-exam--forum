import StyledHome from "./StyledHome";
import PostsContainer from "./posts-container/PostsContainer";

const Home = () => {
  return (
    <StyledHome>
      <h1>Memes, jokes and questions about programming</h1>
      <PostsContainer />
    </StyledHome>
  );
}

export default Home;