import * as R from "ramda";

import { 
	ADD_BOOK, 
	FETCH_BOOKS,
	SET_BOOKS,
	EDIT_BOOK, 
	DELETE_BOOK, 
} from "../constants";

export const addBook = ({ id, author, title }, books ) => {
	return {
		type: ADD_BOOK,
		payload: [
			...books,
			{
				id,
				author,
				title,
			}
		],
	};
};

export const fetchBooks = () => ({
	type: FETCH_BOOKS,
	//payload: books,
});

export const setBooks = ({ books }) => {
	// if ( typeof books === "undefined") {
	// 	return {
	// 		type: "DO_NOTHING"
	// 	};
	// }
	return {
		type: SET_BOOKS,
		books
	};
};

export const editBook = ({ id, author, title }, books) => ({
	type: EDIT_BOOK,
	payload: {
		...books,
		[+id]:{
			id,
			author,
			title
		}
	},
});



export const deleteBook = ({id, author, title }, books) => {
	let filteredPayload = {};
	let updatedPayload = R.without([{id, author, title}], books);
	updatedPayload.map((book, i) => { 
		return filteredPayload[i] = {
			id: `${i}`,
			author: book.author,
			title: book.title,
		};
		
	});
	return {
		type: DELETE_BOOK,
		payload: filteredPayload,
	};
};