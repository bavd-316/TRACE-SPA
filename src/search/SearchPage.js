import React, { useState } from 'react';
import styles from './SearchPage.css';
import SearchBar from './SearchBar.js';
import CourseListing from '../common/CourseListing.js';

const SearchPage = () => {
	const [results, setResults] = useState([]);

	return (
		<div className={styles.page}>
			<div className={styles.searchBar}>
				<SearchBar setResults={setResults} />
				<div className={styles.searchResults}>
					<CourseListing title={'SEARCH RESULTS'} courses={results} />
				</div>
			</div>
			<div className={styles.recentReports}>
				<div className={styles.reports}>
					<CourseListing
						title={'RECENTLY VIEWED REPORTS'}
						courses={results}
					/>
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
