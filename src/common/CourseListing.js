import React from 'react';
import styles from './CourseListing.css';

const CourseListing = ({ course, history }) => (
	<div
		className={styles.course}
		onClick={() => history.push(`/report/${course.id}`)}
	>
		<p>
			<span className={styles.num}>{course.num}</span>
			{course.label} - {course.instructor}
			<span className={styles.term}>{course.term}</span>
		</p>
	</div>
);

export default CourseListing;
