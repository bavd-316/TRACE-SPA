import React from 'react';
import { questionsByCategory } from './selectors';
import QuestionChart from './QuestionChart';

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
