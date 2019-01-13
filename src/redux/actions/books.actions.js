//import uuid from "uuid/v5";
import { ADD_BOOK, FETCH_BOOKS, SET_BOOKS } from "../constants";
import { database } from "../../database/config.js"; 

export const startAddingBook = book => (dispatch) => {
	return database.ref("books").update({ [book.title]: book }).then(() => {
		dispatch(addBook(book));
	}).catch((error) => {
		console.log(error);
	});
};

export const startFetchingBooks = () => (dispatch) => {
	return database.ref("books").once("value").then((snapshot) => {
		const books = [];
		snapshot.forEach((childSnapshot) => {
			books.push(childSnapshot.val());
		});
		dispatch(fetchBooks(books));
	}).catch((error) => {
		console.log(error);
	});
}

export const addBook = book => ({
	type: ADD_BOOK,
	payload: book,
});

export const setBooks = books => ({
	type: SET_BOOKS,
	payload: books,
});

export const fetchBooks = books => ({
	type: FETCH_BOOKS,
	payload: books,
});