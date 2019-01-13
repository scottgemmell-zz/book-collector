//import uuid from "uuid/v5";
import { ADD_BOOK, SET_BOOKS } from "../constants";
import { database } from "../../database/config.js"; 

export const startAddingBook = book => (dispatch) => {
	return database.ref("books").update({ [book.title]: book }).then(() => {
		dispatch(addBook(book));
	}).catch((error) => {
		console.log(error);
	});
};

export const addBook = book => ({
	type: ADD_BOOK,
	payload: book,
});

export const setBooks = books => ({
	type: SET_BOOKS,
	payload: books,
});