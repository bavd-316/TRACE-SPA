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
				ds => ds.label === responseAnswer.answer.text
			);
			if (answerDataSetIndex === -1) {
				chartData.datasets.push({
					label: responseAnswer.answer.text,
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

const CategoryChart = ({ category, responseQuestions }) => {
	const chartData = generateChartData(responseQuestions);
	const chartOptions = {
		responsive: true,
		title: {
			display: true,
			text: category.text
		},
		legend: {
			display: false
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
					},
					barThickness: 'flex',
					maxBarThickness: 25,
					barPercentage: 0.9,
					categoryPercentage: 1.0,
					ticks: {
						display: false
					}
				}
			]
		}
	};
	return (
		<div
			style={{
				width: '750px',
				display: 'block',
				marginLeft: 'auto',
				marginRight: 'auto'
			}}
		>
			<BarChart data={chartData} options={chartOptions} />
		</div>
	);
};

export default CategoryChart;
