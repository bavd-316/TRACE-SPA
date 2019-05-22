import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

	return <div>{JSON.stringify(report, 4)}</div>;
};

export default ReportViewPage;
