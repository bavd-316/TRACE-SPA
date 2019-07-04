import React from 'react';
import styles from './InstructorBox.css';

const BAR_COLORS = [
	'#91141c',
	'#b61924',
	'#c4464f',
	'#d3757b',
	'#e1a3a7',
	'#f0d1d3'
];

const InstructorBox = () => {
	return (
		<div className={styles.instructorBox}>
			<div className={styles.ratingBox}>
				<h3><span>98</span>/100</h3>
				<h3>INSTRUCTOR RATING</h3>
				<p>HOW IS THIS CALCULATED?</p>
			</div>
			<div>
				<hr/>
				<div className={styles.infoBox}>
					<p>Rate My Professor <span>98</span></p>
					<p>Overall Effectiveness <span>98</span></p>
				</div>
				<hr/>
			</div>
		</div>
	)
};

export default InstructorBox;
