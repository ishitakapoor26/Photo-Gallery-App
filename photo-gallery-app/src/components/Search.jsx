import css from "../styles/Search.module.css";

const Search = () => {
  return (
    <div className={css["searchBar"]}>
      <input className={css["searchInput"]} placeholder="Search...."></input>
      <button className={css["searchBtn"]}>Search</button>
    </div>
  );
};

export default Search;
