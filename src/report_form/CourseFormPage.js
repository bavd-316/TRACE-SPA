import React, { useState, useEffect } from 'react';
import styles from './CourseFormPage.css';
import lodashIsEmpty from 'lodash/isEmpty';
import lodashRange from 'lodash/range';
import axios from 'axios';
import CategoryForm from './CategoryForm';

const CompletionBar = ({ index, length }) => (
	<div className={styles.sectionBar}>
		{lodashRange(0, length).map(ind => (
			<div
				className={ind >= index ? styles.active : null}
				key={`${ind}`}
			/>
		))}
	</div>
);

const CourseFormPage = ({ match, ...props }) => {
	console.log(match);
	const [index, setIndex] = useState(0);
	const [course, setCourse] = useState({});
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		if (lodashIsEmpty(course)) {
			console.log('loaded');
			axios
				.get(
					`http://127.0.0.1:5000/api/v1/course/${
						match.params.courseId
					}`
				)
				.then(res => {
					const resp_course = res.data;
					setCourse(resp_course);
					axios
						.get(
							`http://127.0.0.1:5000/api/v1/term/${
								resp_course.term.id
							}/categories`
						)
						.then(r => setCategories(r.data.data))
						.catch(ex => console.error(ex));
				})
				.catch(ex => console.error(ex));
		}
	}, [match.params.courseId]);

	return categories.length ? (
		<div>
			{index < categories.length ? (
				<React.Fragment>
					<div className={styles.banner} />
					<div className={styles.form}>
						<CompletionBar
							index={index}
							length={categories.length}
						/>
						<CategoryForm
							title={categories[index].text}
							questions={categories[index].questions}
							answers={categories[index].answers}
						/>
						<div className={styles.buttonCluster}>
							<button
								className={styles.button}
								onClick={() => setIndex(index + 1)}
							>
								{index < categories.length - 1
									? 'Next'
									: 'Done'}
							</button>
							{index > 0 && (
								<button
									className={styles.button}
									onClick={() => setIndex(index - 1)}
								>
									Prev
								</button>
							)}
						</div>
					</div>
				</React.Fragment>
			) : (
				<div>Form Submitted</div>
			)}
		</div>
	) : (
		<div>Loading...</div>
	);
};

export default CourseFormPage;
