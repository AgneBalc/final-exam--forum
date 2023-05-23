import StyledEmptyTab from "./StyledEmptyTab";

const EmptyTab = ({ message }) => {
  return (
    <StyledEmptyTab>
      <div className="container">
        <div className="votes">
          <i
            className="fa-solid fa-up-long"
          ></i>
          <div></div>
          <i
            className="fa-solid fa-down-long"></i>
        </div>
        <p>{message}</p>
      </div>
    </StyledEmptyTab>
  );
}

export default EmptyTab;