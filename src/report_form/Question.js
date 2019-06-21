import React from 'react';
import styles from './Question.css';

// TODO: Order Answers/Clean up answers
const Question = ({ question, answers, editDraft, draft }) => (
	<div className={styles.row}>
		<h4>{question.text}</h4>
		<div className={styles.form}>
			<form>
				{answers.map((option, ind) => (
					<div
						key={`${option.text} - ${ind}`}
						className={styles.check}
					>
						<label>
							<input
								type="radio"
								name={question.text}
								checked={draft[question.id] === option.id}
								value={option.id}
								onChange={event =>
									editDraft({
										[question.id]: parseInt(
											event.target.value
										)
									})
								}
								required={true}
							/>
							{option.text}
						</label>
					</div>
				))}
			</form>
		</div>
	</div>
);

export default Question;
