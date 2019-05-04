import React, { Component } from 'react';
import styles from './CourseForm.css';
import Question from './Question.js';

const CourseForm = ({ title, questionList }) => (
	<div className={styles.container}>
		<div className={styles.title}>
			<h2>{title}</h2>
			<p>Please answer these questions about your course.</p>
		</div>
		<div className={styles.questions}>
			{questionList.map(question => (
				<Question question={question} />
			))}
		</div>
	</div>
);

export default CourseForm;
