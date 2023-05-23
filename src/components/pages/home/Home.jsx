import StyledHome from "./StyledHome";
import PostsContainer from "./posts/posts-container/PostsContainer";

const Home = () => {
  return (
    <StyledHome>
      <section className="hero">
        <div className="picture"></div>
        <h1>
          <i className="fa-solid fa-laptop-code"></i>
          Memes, jokes and questions about programming
        </h1>
      </section>
      <PostsContainer />
    </StyledHome>
  );
}

export default Home;