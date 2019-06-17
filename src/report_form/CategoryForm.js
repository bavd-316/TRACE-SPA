import React from 'react';
import styles from './CategoryForm.css';
import Question from './Question.js';

const CategoryForm = ({ title, questions, answers }) => (
	<div className={styles.container}>
		<div className={styles.title}>
			<h2>{title}</h2>
			<p>Please answer these questions about your course.</p>
		</div>
		<div className={styles.questions}>
			{questions.map(question => (
				<Question question={question} answers={answers} />
			))}
		</div>
	</div>
);

export default CategoryForm;
