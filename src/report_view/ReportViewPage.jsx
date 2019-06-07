import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { questionsByCategory } from './selectors';
import lodashGet from 'lodash/get';
import QuestionChart from './QuestionChart';
import CommentsViewPage from './CommentsViewPage';

const ReportViewPage = ({ match }) => {
	const [report, setReport] = useState({});

	useEffect(() => {
		axios
			.get(
				`http://127.0.0.1:5000/api/v1/course/${match.params.id}/scores`
			)
			.then(res => setReport(res.data))
			.catch(ex => console.error(ex));
	}, []);

	const {
		categories,
		questionMapping: questionsCategoryMap
	} = questionsByCategory(report.questions || []);

	// return Object.entries(questionsCategoryMap || {}).map(
	// 	([categoryId, questions]) => (
	// 		<React.Fragment>
	// 			<QuestionChart
	// 				category={categories[categoryId]}
	// 				responseQuestions={questions || []}
	// 			/>
	// 			<hr />
	// 		</React.Fragment>
	// 	)
	// );
	return <CommentsViewPage comments={report.comments || []} />;
};

export default ReportViewPage;
