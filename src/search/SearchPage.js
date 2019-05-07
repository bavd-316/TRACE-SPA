import React, { useState } from 'react';
import axios from 'axios';

import styles from './SearchPage.css';
import SearchBar from './SearchBar.js';
import CourseListing from '../common/CourseListing.js';
import lodashThrottle from 'lodash/throttle';
import Filter from './Filter';

const SearchPage = () => {
	const [results, setResults] = useState([]);

	const parseOptions = options => {
		return ((options && options.data) || [])
			.map(option => {
				const instructorName =
					option['instructor']['first_name'].substring(0, 1) +
					'. ' +
					option['instructor']['last_name'];
				const course =
					option['department']['code'] + ' ' + option['course_id'];
				return {
					label: option['name'].toUpperCase(),
					term: option['term']['title'].toUpperCase(),
					num: course,
					instructor: instructorName.toUpperCase()
				};
			})
			.slice(0, 5);
	};
	const search = e => {
		axios
			.get(`http://127.0.0.1:5000/api/v1/course?query=${e.target.value}`)
			.then(res => setResults(parseOptions(res.data)))
			.catch(ex => console.error(ex));
		console.log(results);
	};

	lodashThrottle(search, 500);

	return (
		<div className={styles.page}>
			<div className={styles.searchBar}>
				<SearchBar onChange={search} />
				<Filter />
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
