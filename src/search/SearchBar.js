import React, { useState } from 'react';
import styles from './SearchBar.css';

const template = {
	link: 'Report url',
	title: 'title',
	term: 'Fall 2019',
	instructor: 'B. Lerner'
};

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
