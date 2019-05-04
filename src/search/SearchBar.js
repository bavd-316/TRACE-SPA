import React, { useState } from 'react';
import styles from './SearchBar.css';
import SVG from 'react-inlinesvg';
import KeyImage from './search_icon.svg';
import axios from 'axios';
import lodashThrottle from 'lodash/throttle';

const template = {
	link: 'Report url',
	title: 'title',
	term: 'Fall 2019',
	instructor: 'B. Lerner'
};

const SearchBar = ({ setResults }) => {
	const loadOptions = event => onChange(event);
	lodashThrottle(loadOptions, 500);

	const parseOptions = options => {
		return options.data
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

	const getResults = inputValue => {
		return axios
			.get(`http://127.0.0.1:5000/api/v1/course?query=${inputValue}`)
			.then(res => {
				return parseOptions(res.data);
			});
	};
	const onChange = e => {
		const value = e.target.value;
		const res = getResults(value);
		console.log(res);
		res.then(value => {
			setResults(value);
		});
	};

	return (
		<div className={styles.searchBar}>
			<form>
				<img src={require('./search_icon.svg')} />
				<input onChange={loadOptions} />
				<hr />
			</form>
		</div>
	);
};

export default SearchBar;
