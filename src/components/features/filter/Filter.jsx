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
  return (
    <section>
      {filterButtons.map((item, index) => (
        <button
          key={index}
        // onClick={() => setSelectedTab(item.title)}
        // className={item.title === selectedTab ? 'selected' : ''}
        >
          <i className={item.icon}></i>
          <span>{item.title}</span>
        </button>
      ))}
    </section>
  );
}

export default Filter;