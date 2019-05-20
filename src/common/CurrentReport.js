import React, { Component } from 'react';
import styles from './CurrentReport.css';

const CurrentReport = course => (
	<div className={styles.container}>
		<div className={styles.courseInfo}>
			<p className={styles.num}>{course.num}</p>
			<p className={styles.label}>{course.label}</p>
			<p className={styles.instructor}>{course.instructor}</p>
		</div>
		<hr />
		<div className={styles.meta}>
			<p className={styles.status}>
				Status<span>{course.status}</span>
			</p>
			<p className={styles.range}>
				Range<span>{course.range}</span>
			</p>
		</div>
		<hr />
	</div>
);

export default CurrentReport;
