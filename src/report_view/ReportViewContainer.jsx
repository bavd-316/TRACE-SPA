import React, { useState, useEffect } from 'react';
import axios from 'axios';
import lodashIsEmpty from 'lodash/isEmpty';
import PageRouter from '../common/PageRouter';

const ReportViewContainer = ({ match, routes }) => {
	const [report, setReport] = useState({});
	useEffect(() => {
		if (lodashIsEmpty(report)) {
			console.log('loaded');
			axios
				.get(
					`http://127.0.0.1:5000/api/v1/course/${
						match.params.id
					}/scores`
				)
				.then(res => setReport(res.data))
				.catch(ex => console.error(ex));
		}
	}, [match.params.id]);

	return <PageRouter routes={routes} renderProps={{ report: report }} />;
};

export default ReportViewContainer;
