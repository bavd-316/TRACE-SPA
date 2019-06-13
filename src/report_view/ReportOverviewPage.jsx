import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { questionsByCategory } from './selectors';
import QuestionChart from './QuestionChart';
import CommentsViewPage from './CommentsViewPage';
import { Link, withRouter } from 'react-router-dom';

const ReportOverviewPage = ({ match, questions }) => {
	const {
		categories,
		questionMapping: questionsCategoryMap
	} = questionsByCategory(questions || []);

	return (
		<React.Fragment>
			{/*<Link to={`/report/${match.params.id}/comments`}>Comments</Link>*/}
			{Object.entries(questionsCategoryMap || {}).map(
				([categoryId, questions]) => (
					<React.Fragment key={`${categoryId}`}>
						<QuestionChart
							category={categories[categoryId]}
							responseQuestions={questions || []}
						/>
						<hr />
					</React.Fragment>
				)
			)}
		</React.Fragment>
	);
};

export default ReportOverviewPage;
