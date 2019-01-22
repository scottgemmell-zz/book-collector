//import uuid from "uuid/v5";
import { 
	ADD_BOOK, 
	FETCH_BOOKS, 
	//SET_BOOKS, 
	EDIT_BOOK, 
	DELETE_BOOK 
} from "../constants";
import { database } from "../../database/config.js"; 

export const startAddingBook = book => (dispatch) => {
	return database.ref(`books/${book.id}`).set({ 
		id: book.id, 
		author: book.author, 
		title: book.title, 
	}).then(() => {
		dispatch(addBook(book));
	}).catch((error) => {
		console.log(error);
	});
};

export const startEditingBook = book => (dispatch) => {
	return database.ref(`books/${book.id}`).set({ 
		id: book.id, 
		author: book.author, 
		title: book.title, 
	}).then(() => {
		dispatch(editBook(book));
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
};

export const startDeletingBook = index => (dispatch) => {
	return database.ref(`books/${index}`).remove()
		.then(() => {
			dispatch(deleteBook(index));
		}).catch((error) => {
			console.log(error);
		});
};

export const addBook = book => ({
	type: ADD_BOOK,
	payload: book,
});

export const editBook = book => ({
	type: EDIT_BOOK,
	payload: book,
});

// export const setBooks = books => ({
// 	type: SET_BOOKS,
// 	payload: books,
// });

export const fetchBooks = books => ({
	type: FETCH_BOOKS,
	payload: books,
});

export const deleteBook = id => ({
	type: DELETE_BOOK,
	payload: id,
});