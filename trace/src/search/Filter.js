import React from 'react';
import styles from './Filter.css';


const Dropdown = (name, options) => {
    return (
        <select className={styles.dropdown} name={name}>
            <option value="" disabled selected>{name}</option>
            {options.map((option) => {
                return (
                    <option value={option}>{option}</option>
                )
            })}
        </select>
    )
};

const Filter = () => {
    let options = ["one", "two", "three"];
    return (
        <div className={styles.filter}>
            <p>FILTER</p>
            <div className={styles.dropdownLists}>
                {Dropdown("Term", options)}
                {Dropdown("Department", options)}
                {Dropdown("Instructor", options)}
            </div>
        </div>
    )
};

export default Filter;