import React, { useState, useEffect } from 'react';
import Pagination, { DEFAULT_PAGE_SIZE } from '../common/Pagination';

const CommentsViewPage = ({ comments }) => {
	const pageSize = DEFAULT_PAGE_SIZE;
	const [pageComments, setPageComments] = useState(
		comments.slice(0, pageSize)
	);

	useEffect(() => {
		setPageComments(getCommentsForPage(1));
	}, [comments]);

	const getCommentsForPage = page => {
		const startIndex = (page - 1) * pageSize;
		return comments.slice(startIndex, startIndex + pageSize);
	};

	return (
		<div>
			{pageComments.map((comment, index) => (
				<React.Fragment key={`view-comment-${index}`}>
					<h5>{comment}</h5>
					<hr />
				</React.Fragment>
			))}
			<br />
			<Pagination
				numElements={comments.length}
				pageSize={pageSize}
				maxNumButtons={3}
				onChange={newPage =>
					setPageComments(getCommentsForPage(newPage))
				}
			/>
		</div>
	);
};

export default CommentsViewPage;
