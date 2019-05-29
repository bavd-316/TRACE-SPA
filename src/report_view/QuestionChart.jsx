import React from 'react';
import { HorizontalBar as BarChart } from 'react-chartjs-2';

const BAR_COLORS = [
	'#91141c',
	'#b61924',
	'#c4464f',
	'#d3757b',
	'#e1a3a7',
	'#f0d1d3'
];

const generateChartData = responseQuestions => {
	const chartData = { labels: [], datasets: [] };
	const answerTextValRegex = /(\d|-\d)/;
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
		.sort((dsA, dsB) =>
			(dsB.label.match(answerTextValRegex).pop() || '').localeCompare(
				dsA.label.match(answerTextValRegex).pop() || ''
			)
		)
		.map((ds, ind) => ({
			...ds,
			backgroundColor: BAR_COLORS[ind % BAR_COLORS.length]
		}));

	return chartData;
};

const CategoryChart = ({ category, responseQuestions }) => {
	const chartData = generateChartData(responseQuestions);
	const chartOptions = {
		title: {
			display: true,
			text: category.text
		},
		tooltips: {
			filter: item => item.value > 0
		},
		scales: {
			xAxes: [
				{
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
					stacked: true,
					gridLines: {
						display: false,
						drawBorder: false
					}
				}
			]
		}
	};
	return (
		<div>
			<BarChart
				data={chartData}
				options={chartOptions}
				width="300px"
				height="60px"
			/>
		</div>
	);
};

export default CategoryChart;
