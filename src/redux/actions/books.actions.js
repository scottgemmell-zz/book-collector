import { 
	//BOOKS, 
	ADD_BOOK, 
	FETCH_BOOKS,
	SET_BOOKS,
	// EDIT_BOOK, 
	// DELETE_BOOK, 
} from "../constants";

export const addBook = book => {
	console.log("addBook", { book });
	return {
		type: ADD_BOOK,
		payload: {
			book
		},
	};
};

// [book.id]: { 
// 	id: book.id,
// 	author: book.author, 
// 	title: book.title 
// }
// export const editBook = ({ id, author, title }) => ({
// 	type: EDIT_BOOK,
// 	id,
// 	author,
// 	title,
// });

export const fetchBooks = () => ({
	type: FETCH_BOOKS,
	//payload: books,
});

export const setBooks = ({ books }) => ({
	type: SET_BOOKS,
	payload: books
});

// export const deleteBook = id => ({
// 	type: DELETE_BOOK,
// 	deleteId: id,
// });