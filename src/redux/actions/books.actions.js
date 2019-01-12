import { ADD_BOOK, SET_BOOKS } from "../constants";

export const addBook = book => ({
	type: ADD_BOOK,
	payload: book,
});

export const setBooks = books => ({
	type: SET_BOOKS,
	payload: books,
});