import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { questionsByCategory } from './selectors';
import lodashGet from 'lodash/get';
import QuestionChart from './QuestionChart';

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

	return Object.entries(questionsCategoryMap || {}).map(
		([categoryId, questions]) => (
			<React.Fragment>
				{/*<div>*/}
				{/*<span>{categoryId}: </span>*/}
				{/*{categories[categoryId].text}*/}
				{/*<hr />*/}
				{/*</div>*/}
				{/*{(questions || []).map(q => (*/}
				{/*<div style={{ display: 'flex' }}>*/}
				{/*<div>{lodashGet(q, 'question.text')}</div>*/}
				{/*<div>{'-'}</div>*/}
				{/*<div>{q.mean}</div>*/}
				{/*</div>*/}
				{/*))}*/}
				{/*<hr />*/}
				<QuestionChart
					category={categories[categoryId]}
					responseQuestions={questions || []}
				/>
				<hr />
			</React.Fragment>
		)
	);
};

export default ReportViewPage;
