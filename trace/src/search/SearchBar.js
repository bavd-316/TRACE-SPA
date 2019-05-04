import React, { useState } from "react";
import styles from "./SearchBar.css";

const SearchBar = props => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.searchBar}>
      <form>
        {/*<img src={require('./search_icon.svg')}/>*/}
        <input onChange={event => setQuery(event.target.value)} />
        <hr />
      </form>
    </div>
  );
};

export default SearchBar;
