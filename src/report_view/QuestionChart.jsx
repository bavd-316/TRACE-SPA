import React, {useRef, useEffect, useState} from 'react';
import styles from './QuestionChart.css';
import { HorizontalBar } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

const BAR_COLORS = [
	'#91141c',
	'#b61924',
	'#c4464f',
	'#d3757b',
	'#e1a3a7',
	'#f0d1d3'
];

var chartOptions = {
	responsive: false,
	animation: false,
	legend: {
		display: false,
		position: 'bottom'
	},
	tooltips: {
		enabled: false
	},
	scales: {
		xAxes: [
			{
				id: 'x-axis',
				display: false,
				stacked: true,
				gridLines: {
					display: false
				},
				ticks: {
					display: false
				}
			}
		],
		yAxes: [
			{
				id: 'y-axis',
				stacked: true,
				gridLines: {
					display: false,
					drawBorder: false
				},
				maxBarThickness: 20,
				barPercentage: 1.0,
				categoryPercentage: 1.0,
				ticks: {
					display: false
				}
			}
		]
	}
};

const generateChartData = responseQuestions => {
	const chartData = { labels: [], datasets: [] };
	// "Usually Effective (3)" -> "3"
	// "Not (-1)" -> "-1"
	// "9-12" -> "9"
	const answerTextValRegex = /(\d+|-\d+)/;
	for (let responseQuestion of responseQuestions) {
		if (!chartData.labels.includes(responseQuestion.question.text)) {
			chartData.labels.push(responseQuestion.question.text);
		}
		for (let responseAnswer of responseQuestion.answers) {
			const answerDataSetIndex = chartData.datasets.findIndex(
				ds => ds.label === responseAnswer.answer
			);
			if (answerDataSetIndex === -1) {
				chartData.datasets.push({
					label: responseAnswer.answer,
					data: [responseAnswer.value]
				});
			} else {
				chartData.datasets[answerDataSetIndex].data.push(
					responseAnswer.value
				);
			}
		}
	}

	chartData.datasets = chartData.datasets
		.sort((dsA, dsB) => {
			const getSortProp = ds =>
				parseInt(ds.label.match(answerTextValRegex).shift());
			return getSortProp(dsB) - getSortProp(dsA);
		})
		.map((ds, ind) => ({
			...ds,
			backgroundColor: BAR_COLORS[ind % BAR_COLORS.length]
		}));

	return chartData;
};

const generateCleanData = chartData => {
	var cleanChartData = [];
	for (var i = 0; i < chartData.labels.length; i++) {
		var cleanData = {
			labels: [chartData.labels[i]],
			datasets: []
		}
		for (let dataset of chartData.datasets) {
			var cleanDataSet = {
				backgroundColor: dataset.backgroundColor,
				data: [dataset.data[i]],
				label: dataset.label
			}
			cleanData.datasets.push(cleanDataSet);
		}
		cleanChartData.push(cleanData);
	}
	return cleanChartData;
}

const QuestionBar = (chartDataGroup) => {
	return (
		<div
			className={styles.questionBar}
			style={{
				top: '-1.5rem',
				position: 'relative',
				maxWidth: '65rem'}}>
			<p style={{
				position: 'relative',
				top: '1rem'}}>
				{chartDataGroup.labels[0]}
			</p>
			<HorizontalBar
				height={35}
				width={700}
				data={chartDataGroup}
				options={chartOptions}
			/>
		</div>
	)
}

const CategoryChart = ({ category, responseQuestions }) => {
	const chartData = generateChartData(responseQuestions);
	const cleanChartData = generateCleanData(chartData);
	const title = category.text.toUpperCase();



	return (
		<div className={styles.chartContainer}>
			<h3>{title}</h3>
			{cleanChartData.map((chartDataGroup) => {
				return QuestionBar(chartDataGroup)
			})}
		</div>
	)
};

export default CategoryChart;
