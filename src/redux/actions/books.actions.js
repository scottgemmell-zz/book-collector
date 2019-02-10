import { 
	ADD_BOOK, 
	FETCH_BOOKS,
	SET_BOOKS,
	EDIT_BOOK, 
	DELETE_BOOK, 
} from "../constants";

export const addBook = ({ 
	id, 
	author, 
	title, 
	noOfPages,
	publisher, 
	lang, 
	isbn10,
	isbn13, 
	publicationDate 
}) => {
	//console.log({ id, author, title });
	return {
		type: ADD_BOOK,
		payload: {
			id: +id,
			author,
			title,
			noOfPages: +noOfPages,
			publisher,
			lang,
			isbn10: +isbn10,
			isbn13,
			publicationDate
		},
	};
};

export const fetchBooks = () => ({
	type: FETCH_BOOKS,
});

export const setBooks = ({ books }) => {
	return {
		type: SET_BOOKS,
		books
	};
};

export const editBook = ({ 
	id, 
	author, 
	title, 
	noOfPages,
	publisher, 
	lang, 
	isbn10,
	isbn13, 
	publicationDate 
}) => ({
	type: EDIT_BOOK,
	payload: {
		id: +id,
		author,
		title,
		noOfPages: +noOfPages,
		publisher,
		lang,
		isbn10: +isbn10,
		isbn13,
		publicationDate
	},
});



export const deleteBook = id => {
	return {
		type: DELETE_BOOK,
		payload: +id,
	};
};