import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { questionsByCategory } from './selectors';
import QuestionChart from './QuestionChart';
import CommentsViewPage from './CommentsViewPage';
import InstructorBox from './InstructorBox';
import { Link, withRouter } from 'react-router-dom';
import styles from './ReportOverviewPage.css';

const ReportOverviewPage = ({ match, questions }) => {
	const {
		categories,
		questionMapping: questionsCategoryMap
	} = questionsByCategory(questions || []);

	const chartContainers = Object.entries(questionsCategoryMap || {}).map(
		([categoryId, questions]) => (
						<QuestionChart
							key={`${categoryId}`}
							category={categories[categoryId]}
							responseQuestions={questions || []}
						/>
		)
	)
	console.log(questionsCategoryMap);

	return (
		<div className={styles.reportOverviewPage}>
			{chartContainers.map((chart) => {
					return (
						<div className={styles.container}>
							<div>
								{chart}
							</div>
						</div>
					)
				})
			}
		</div>
	);
};

export default ReportOverviewPage;
