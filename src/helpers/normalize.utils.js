const normalizeDate = value => {
	console.log('normalizeDate', value);

	// const dateVal = value.publishedDate.split("-");
	// if (!value) {
	// 	return value;
	// }
	// // only DD
	// if (dateVal[0].length === 2 && !dateVal[1]) {
	// 	return dateVal[0];
	// }
	// // MM && YYYY
	// if (dateVal[0].length === 4 && dateVal[1].length === 2 && !dateVal[2]) {
	// 	return `${dateVal[1]}-${dateVal[0]}`;
	// }
	// // only YYYY
	// if (dateVal[0].length === 4 && !dateVal[1] && !dateVal[2]) {
	// 	return dateVal[0];
	// }
	// // DD, MM, YYYY
	// if (dateVal[0].length === 4 && dateVal[1].length === 2 && dateVal[2].length === 2) {
	// 	return `${dateVal[2]}-${dateVal[1]}-${dateVal[0]}`;
	// }

	return value;
};

export default normalizeDate;