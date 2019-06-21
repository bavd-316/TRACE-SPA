export const questionsByCategory = questions => {
	const questionMapping = {};
	const categoryMapping = {};

	for (const question of questions) {
		const category = question.question.category;
		const categoryId = category.id;
		if (categoryId in questionMapping) {
			questionMapping[categoryId].push(question);
		} else {
			questionMapping[categoryId] = [question];
			categoryMapping[categoryId] = category;
		}
	}

	// return lodashGroupBy(questions, rq => rq.question.category.id);
	return { categories: categoryMapping, questionMapping: questionMapping };
};
