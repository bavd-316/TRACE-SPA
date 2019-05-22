import React from 'react';
import axios from 'axios';
import AsyncSelect from 'react-select/lib/Async';
import lodashThrottle from 'lodash/throttle';

const loadOptions = inputValue => getOptions(inputValue);
const debouncedLoad = lodashThrottle(loadOptions, 500);

const parseOptions = options =>
	options.data
		.map(option => ({
			value: option['course_id'],
			label: option['name']
		}))
		.slice(0, 5);

const getOptions = inputValue => {
	return axios
		.get(`http://127.0.0.1:5000/api/v1/course?query=${inputValue}`)
		.then(res => parseOptions(res.data));
};

const SelectTag = () => (
	<AsyncSelect
		isMulti
		cacheOptions
		defaultOptions
		loadOptions={inputValue => debouncedLoad(inputValue)}
	/>
);

export default SelectTag;