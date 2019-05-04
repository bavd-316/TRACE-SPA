import React from 'react';
import styles from './Filter.css';

const Dropdown = ({ name, options }) => (
	<select className={styles.dropdown} name={name}>
		<option value="" disabled selected>
			{name}
		</option>
		{options.map(option => (
			<option value={option}>{option}</option>
		))}
	</select>
);

const Filter = () => {
	let options = ['one', 'two', 'three'];
	return (
		<div className={styles.filter}>
			<p>FILTER</p>
			<div className={styles.dropdownLists}>
				<Dropdown name={'Term'} options={options} />
				<Dropdown name={'Department'} options={options} />
				<Dropdown name={'Instructor'} options={options} />
			</div>
		</div>
	);
};

export default Filter;
