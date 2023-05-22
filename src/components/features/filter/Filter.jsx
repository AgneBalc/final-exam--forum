import { useState } from "react";
import StyledFilter from "./StyledFilter";

const filterButtons = [
  {
    icon: "fa-solid fa-rocket",
    title: "Best",
  },
  {
    icon: "fa-solid fa-certificate",
    title: "New",
  },
  {
    icon: "fa-solid fa-comments",
    title: "Active",
  },
  {
    icon: "fa-solid fa-comment-slash",
    title: "Inactive",
  },
];

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState(filterButtons[0].title);

  return (
    <StyledFilter>
      {filterButtons.map((item, index) => (
        <button
          key={index}
          onClick={() => setSelectedFilter(item.title)}
          className={item.title === selectedFilter ? 'selected' : ''}
        >
          <i className={item.icon}></i>
          <span>{item.title}</span>
        </button>
      ))}
    </StyledFilter>
  );
}

export default Filter;