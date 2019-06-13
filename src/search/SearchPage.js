import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './SearchPage.css';
import courseListingStyles from '../common/CourseListing.css';
import SearchBar from './SearchBar.js';
import CourseListing from '../common/CourseListing.js';
import lodashThrottle from 'lodash/throttle';
import Filter from './Filter';

const SearchPage = props => {
	// Results
	const [results, setResults] = useState([]);
	// Query
	const [query, setQuery] = useState('');
	// Facets
	const [terms, setTerms] = useState([]);
	const [departments, setDepartments] = useState([]);
	const [instructors, setInstructors] = useState([]);

	const getIDCommaStr = items => items.map(i => i.value.id).join(',');

	const parseOptions = options => {
		return ((options && options.data) || [])
			.map(option => {
				const instructorName =
					option['instructor']['first_name'].substring(0, 1) +
					'. ' +
					option['instructor']['last_name'];
				const course = option['subject'] + ' ' + option['number'];
				return {
					label: option['name'].toUpperCase(),
					term: option['term']['title'].toUpperCase(),
					num: course,
					instructor: instructorName.toUpperCase(),
					id: option['id']
				};
			})
			.slice(0, 5);
	};
	const search = () => {
		if (!query.trim()) return;
		axios
			.get(
				`http://127.0.0.1:5000/api/v1/course?query=${query}&term_id=${getIDCommaStr(
					terms
				)}&instructor_id=${getIDCommaStr(
					instructors
				)}&department_id=${getIDCommaStr(departments)}`
			)
			.then(res => setResults(parseOptions(res.data)))
			.catch(ex => console.error(ex));
	};

	lodashThrottle(search, 500);

	useEffect(search, [instructors, departments, terms, query]);

	return (
		<div className={styles.page}>
			<div className={styles.searchBar}>
				<SearchBar onChange={e => setQuery(e.target.value)} />
				<Filter
					setDepartments={setDepartments}
					setInstructors={setInstructors}
					setTerms={setTerms}
				/>
				<div className={courseListingStyles.searchResults}>
					<div className={courseListingStyles.container}>
						<p className={courseListingStyles.title}>
							{'SEARCH RESULTS'}
						</p>
						<div className={courseListingStyles.courseList}>
							<hr />
							{results.map((result, ind) => (
								<CourseListing
									key={`course-listing-${ind}`}
									course={result}
									history={props.history}
								/>
							))}
							<hr />
						</div>
					</div>
				</div>
			</div>
			{/*<div className={styles.recentReports}>*/}
			{/*<div className={styles.reports}>*/}
			{/*<CourseListing*/}
			{/*title={'RECENTLY VIEWED REPORTS'}*/}
			{/*courses={results}*/}
			{/*/>*/}
			{/*</div>*/}
			{/*</div>*/}
		</div>
	);
};

export default SearchPage;
