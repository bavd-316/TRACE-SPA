import React, { useState } from 'react';
import styles from './Question.css';

const Question = ({ question }) => {
	const [selectedOption, setSelectedOption] = useState('Not Applicable');

	const options = [
		'Strongly Agree',
		'Agree',
		'Neutral',
		'Disagree',
		'Strongly Disagree',
		'Not Applicable'
	];
	return (
		<div className={styles.row}>
			<h4>{question}</h4>
			<div className={styles.form}>
				<form>
					{options.map(option => (
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
