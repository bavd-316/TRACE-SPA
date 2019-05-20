import React, { useState } from 'react';
import CourseFormPage from './report_form/CourseFormPage.js';
import Header from './header/Header.js';
import styles from './App.css';
import SearchPage from './search/SearchPage';
import DashboardPage from './dashboard/DashboardPage';

const App = () => {
	const [activePageIndex, setActivePageIndex] = useState(0);
	const pages = [
		{
			label: 'Dashboard',
			value: <DashboardPage />
		},
		{
			label: 'Search',
			value: <SearchPage />
		},
		{
			label: 'Form',
			value: <CourseFormPage />
		},
		{
			label: 'Report',
			value: <div>Report View</div>
		}
	];
	return (
		<div className={styles.app}>
			<Header
				pages={pages}
				setActivePage={setActivePageIndex}
				activePageIndex={activePageIndex}
			/>
			{pages[activePageIndex].value}
		</div>
	);
};

export default App;
