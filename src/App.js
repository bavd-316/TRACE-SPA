import React, {Component} from 'react';
import CourseFormPage from "./report_form/CourseFormPage.js";
import header from './header/Header.js';
import styles from './App.css';
import SearchBar from "./search/SearchBar.js";
import SearchPage from "./search/SearchPage";
import SelectTag from "./search/SelectTag";

const App = () => {
    let headerContent = {
        title: null,
        pages: [
            {
                active: true,
                label: "Dashboard"
            },
            {
                active: false,
                label: "SearchBar"
            }
        ]
    };
    return (
        <div className={styles.app}>
            {header(headerContent)}
            {SearchPage()}
        </div>
    );
};

export default App;
