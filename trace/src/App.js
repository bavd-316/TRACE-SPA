import React, { Component } from 'react';
import CourseFormPage from './report_form/CourseFormPage.js';
import Header from './header/Header.js';
import styles from './App.css';
import SearchBar from './search/SearchBar.js';
import SearchPage from './search/SearchPage';

const App = () => {
	const title = null;
	const pages = [
		{
			active: true,
			label: 'Dashboard'
		},
		{
			active: false,
			label: 'SearchBar'
		}
	];
	return (
		<div className={styles.app}>
			<Header title={title} pages={pages} />
			<SearchPage />
		</div>
	);
};

export default App;
