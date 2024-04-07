/* eslint-disable react/prop-types */
import { useState } from "react";
import css from "../styles/Search.module.css";
import { searchImages } from "../api";

const Search = ({ nextCursor, setImageList, setNextCursor }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchButton = async () => {
    const response = await searchImages(searchValue, nextCursor);
    console.log(response);
    setImageList(response.resources);
    setNextCursor(response.nextCursor);
    setSearchValue("");
  };

  return (
    <div className={css["searchBar"]}>
      <input
        value={searchValue}
        className={css["searchInput"]}
        placeholder="Search...."
        onChange={(event) => setSearchValue(event.target.value)}
      ></input>
      <button className={css["searchBtn"]} onClick={handleSearchButton}>
        Search
      </button>
    </div>
  );
};

export default Search;
