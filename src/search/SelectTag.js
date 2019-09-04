import React from 'react';
import axios from 'axios';
import AsyncSelect from 'react-select/lib/Async';
import lodashThrottle from 'lodash/throttle';
import { API_BASE_URL } from '../settings';

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
		.get(`${API_BASE_URL}/course?query=${inputValue}`)
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
