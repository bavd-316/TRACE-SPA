import React, { useState } from 'react';
import CourseFormPage from './report_form/CourseFormPage.js';
import Header from './header/Header.js';
import styles from './App.css';
import SearchPage from './search/SearchPage';
import DashboardPage from './dashboard/DashboardPage';
import ReportViewContainer from './report_view/ReportViewContainer';
import PageRouter from './common/PageRouter';
import ReportOverviewPage from './report_view/ReportOverviewPage';
import CommentsViewPage from './report_view/CommentsViewPage';

const App = () => {
	const routes = [
		{
			global: true,
			label: 'Dashboard',
			path: '/',
			exact: true,
			component: DashboardPage
		},
		{
			global: true,
			label: 'Search',
			path: '/search',
			component: SearchPage
		},
		{
			label: 'Evaluation',
			path: '/evaluation',
			component: CourseFormPage
		},
		{
			path: '/report/:id',
			component: ReportViewContainer,
			routes: [
				{
					label: 'Overview',
					exact: true,
					path: [
						'/report/:id',
						'/report/:id/',
						'/report/:id/overview'
					],
					render: ({ report, props }) => {
						console.log(props);
						return (
							<ReportOverviewPage
								questions={report.questions || []}
								{...props}
							/>
						);
					}
				},
				{
					label: 'Comments',
					path: '/report/:id/comments',
					render: ({ report, props }) => (
						<CommentsViewPage
							comments={report.comments || []}
							{...props}
						/>
					)
				}
			]
		}
	];

	return (
		<div className={styles.app}>
			<Header pages={routes} />
			<PageRouter routes={routes} />
		</div>
	);
};

export default App;
