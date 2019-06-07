import React, { useState } from 'react';
import lodashRange from 'lodash/range';

export const DEFAULT_PAGE_SIZE = 10;

const Pagination = ({
	totalPages = null,
	numElements = null,
	onChange,
	pageSize = DEFAULT_PAGE_SIZE,
	startPage = 1,
	maxNumButtons = 5
}) => {
	const [page, setPage] = useState(startPage);

	pageSize = Math.max(pageSize, 1);

	totalPages =
		totalPages === null
			? Math.max(Math.floor((numElements || 0) / pageSize), 1)
			: totalPages;

	const changePage = newPage => {
		const oldPage = page;
		setPage(newPage);
		onChange(newPage, oldPage);
	};

	const getPageButtons = () => {
		let minPage = Math.max(page - Math.floor(maxNumButtons / 2), 1);
		let maxPage = Math.min(
			page + Math.floor(maxNumButtons / 2),
			totalPages
		);

		const diff = maxPage - minPage;
		if (diff < totalPages) {
			const adjustment = maxNumButtons - (diff + 1);
			if (minPage == 1 && adjustment > 0) {
				maxPage = Math.min(maxPage + adjustment, totalPages);
			} else if (maxPage == totalPages && adjustment > 0) {
				minPage = Math.max(minPage - adjustment, 1);
			}
		}

		return lodashRange(minPage, maxPage + 1);
	};

	const pages = getPageButtons();

	return (
		<div>
			<button disabled={pages[0] == 1} onClick={() => changePage(1)}>
				{'<<'}
			</button>
			<button
				disabled={pages[0] == 1}
				onClick={() => changePage(page - 1)}
			>
				{'<'}
			</button>
			{pages.map(pageNum => (
				<button
					key={`page-num-button-${pageNum}`}
					onClick={() => changePage(pageNum)}
				>
					{pageNum}
				</button>
			))}
			<button
				disabled={pages[pages.length - 1] == totalPages}
				onClick={() => changePage(page + 1)}
			>
				{'>'}
			</button>
			<button
				disabled={pages[pages.length - 1] == totalPages}
				onClick={() => changePage(totalPages)}
			>
				{'>>'}
			</button>
		</div>
	);
};

export default Pagination;
