import * as R from "ramda";

import { 
	//BOOKS, 
	ADD_BOOK, 
	FETCH_BOOKS,
	SET_BOOKS,
	EDIT_BOOK, 
	DELETE_BOOK, 
} from "../constants";

export const addBook = ({ id, author, title }, books ) => {
	console.log("addBook", { books, id, author, title });
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
		[+id]:{
			id,
			author,
			title
		}
	},
	books,
});



export const deleteBook = ({id, author, title }, books) => {
	console.log("deleteBook", {id, author, title, books});
	let filteredPayload = {};
	let updatedPayload = R.without([{id, author, title}], books);
	console.log({updatedPayload});
	updatedPayload.map((book, i) => { 
		return filteredPayload[i] = {
			id: `${i}`,
			author: book.author,
			title: book.title,
		};
		
	});
	console.log("deleteBook [2]", filteredPayload);
	return {
		type: DELETE_BOOK,
		payload: filteredPayload,
	};
};