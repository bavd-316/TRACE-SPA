import React, { useState } from 'react';
import styles from './Question.css';

const Question = ({ question, answers }) => {
	const [selectedOption, setSelectedOption] = useState(null);

	return (
		<div className={styles.row}>
			<h4>{question.text}</h4>
			<div className={styles.form}>
				<form>
					{answers.map(option => (
						<div className={styles.check}>
							<label>
								<input
									type="radio"
									name={question}
									checked={selectedOption === option}
									value={option}
									onChange={event =>
										setSelectedOption(event.target.value)
									}
									required={true}
								/>
								{option}
							</label>
						</div>
					))}
				</form>
			</div>
		</div>
	);
};

export default Question;
