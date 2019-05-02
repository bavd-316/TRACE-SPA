import React from 'react';
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
    return (
        <div className={styles.page}>
            <div className={styles.searchBar}>
                <SearchBar/>
                <div className={styles.searchResults}>
                    {CourseListing("SEARCH RESULTS", courses)}
                </div>
            </div>
            <div className={styles.recentReports}>
                <div className={styles.reports}>
                    {CourseListing("RECENTLY VIEWED REPORTS", courses)}
                </div>
            </div>
        </div>
    )
};

export default SearchPage;