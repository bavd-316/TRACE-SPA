import React from 'react';
import styles from './SearchBar.css';

const SearchBar = ({ onChange }) => (
	<div className={styles.searchBar}>
		<form>
			<img src={require('./search_icon.svg')} />
			<input onChange={onChange} />
			<hr />
		</form>
	</div>
);

export default SearchBar;
