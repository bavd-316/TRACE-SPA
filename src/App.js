import React, { useState } from 'react';
import CourseFormPage from './report_form/CourseFormPage.js';
import Header from './header/Header.js';
import styles from './App.css';
import SearchPage from './search/SearchPage';
import DashboardPage from './dashboard/DashboardPage';
import ReportViewPage from './report_view/ReportViewPage';
import { Route, Switch } from 'react-router-dom';

const App = () => {
	const [activePageIndex, setActivePageIndex] = useState(0);
	const pages = [
		{
			path: '/',
			label: 'Dashboard',
			navigableTo: true
		},
		{
			path: '/search',
			label: 'Search',
			navigableTo: true
		},
		{
			path: '/form',
			label: 'Form',
			navigableTo: false
		},
		{
			path: '/report/:id',
			label: 'Report',
			navigableTo: false
		}
	];

	return (
		<div className={styles.app}>
			<Header pages={pages} />
			<Switch>
				<Route exact path={'/'} component={DashboardPage} />
				<Route path={'/search'} component={SearchPage} />
				<Route path={'/form'} component={CourseFormPage} />
				<Route path={'/report/:id'} component={ReportViewPage} />
			</Switch>
		</div>
	);
};

export default App;
