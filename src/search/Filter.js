import React, { useState } from 'react';
import styles from './Filter.css';
import AsyncSelect from 'react-select/lib/Async';
import axios from 'axios';

const Filter = ({ setTerms, setDepartments, setInstructors }) => {
	const departmentToString = d => `${d.title} (${d.code})`;
	const termToString = t => t.title;
	const instructorToString = i => `${i.first_name} ${i.last_name}`;

	const getResults = (
		inputValue = true,
		resource,
		resourceToString,
		withSearch = true
	) => {
		if (!inputValue && withSearch) return [];
		return axios
			.get(
				`http://127.0.0.1:5000/api/v1/${resource}` +
					((withSearch && `?query=${inputValue}`) || '')
			)
			.then(res =>
				((res.data && res.data.data) || []).map(x => ({
					label: resourceToString(x),
					value: x
				}))
			)
			.catch(ex => console.error(ex));
	};

	return (
		<div className={styles.filter}>
			<p>FILTER</p>
			<div className={styles.dropdownLists}>
				<AsyncSelect
					isMulti
					isClearable
					isSearchable={false}
					placeholder={'Term'}
					defaultOptions
					cacheOptions={true}
					loadOptions={val =>
						getResults(val, 'term', termToString, false)
					}
					onChange={e => setTerms(e)}
				/>
				<AsyncSelect
					isMulti
					isSearchable
					isClearable
					placeholder={'Department'}
					loadOptions={val =>
						getResults(val, 'department', departmentToString)
					}
					onChange={e => setDepartments(e)}
				/>
				<AsyncSelect
					isMulti
					isSearchable
					isClearable
					placeholder={'Instructor'}
					loadOptions={val =>
						getResults(val, 'instructor', instructorToString)
					}
					onChange={e => setInstructors(e)}
				/>
			</div>
		</div>
	);
};

export default Filter;
