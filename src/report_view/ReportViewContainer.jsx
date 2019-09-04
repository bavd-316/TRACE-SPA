import React, { useState, useEffect } from 'react';
import axios from 'axios';
import lodashIsEmpty from 'lodash/isEmpty';
import PageRouter from '../common/PageRouter';
import { API_BASE_URL } from '../settings';

const ReportViewContainer = ({ match, routes }) => {
	const [report, setReport] = useState({});
	useEffect(() => {
		if (lodashIsEmpty(report)) {
			console.log('loaded');
			axios
				.get(`${API_BASE_URL}/course/${match.params.id}/scores`)
				.then(res => setReport(res.data))
				.catch(ex => console.error(ex));
		}
	}, [match.params.id]);

	return <PageRouter routes={routes} renderProps={{ report: report }} />;
};

export default ReportViewContainer;
