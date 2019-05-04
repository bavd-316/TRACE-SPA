import React, { useState } from 'react';
import styles from './SearchPage.css';
import SearchBar from './SearchBar.js';
import CourseListing from "../common/CourseListing.js";


const SearchPage = () => {
    let courses = [
        {
            num: "CS 2500",
            label: "FUNDAMENTALS OF COMPSCI",
            instructor: "B. LERNER",
            term: "FALL 2018"
        },
        {
            num: "CS 2500",
            label: "FUNDAMENTALS OF COMPSCI",
            instructor: "B. LERNER",
            term: "FALL 2018"
        },
        {
            num: "CS 2500",
            label: "FUNDAMENTALS OF COMPSCI",
            instructor: "B. LERNER",
            term: "FALL 2018"
        },
        {
            num: "CS 2500",
            label: "FUNDAMENTALS OF COMPSCI",
            instructor: "B. LERNER",
            term: "FALL 2018"
        },
        {
            num: "CS 2500",
            label: "FUNDAMENTALS OF COMPSCI",
            instructor: "B. LERNER",
            term: "FALL 2018"
        },
        {
            num: "CS 2500",
            label: "FUNDAMENTALS OF COMPSCI",
            instructor: "B. LERNER",
            term: "FALL 2018"
        },
        {
            num: "CS 2500",
            label: "FUNDAMENTALS OF COMPSCI",
            instructor: "B. LERNER",
            term: "FALL 2018"
        }
    ];
    const [results, useResults] = useState(courses);

    const setResults = results => useResults(results);

    return (
        <div className={styles.page}>
            <div className={styles.searchBar}>
                <SearchBar setResults={setResults}/>
                <div className={styles.searchResults}>
                    {CourseListing("SEARCH RESULTS", results)}
                </div>
            </div>
            <div className={styles.recentReports}>
                <div className={styles.reports}>
                    {CourseListing("RECENTLY VIEWED REPORTS", results)}
                </div>
            </div>
        </div>
    )
};

export default SearchPage;