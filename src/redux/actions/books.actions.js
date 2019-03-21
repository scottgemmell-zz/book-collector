import { 
	ADD_BOOK, 
	FETCH_BOOKS,
	SET_BOOKS,
	EDIT_BOOK, 
	DELETE_BOOK, 
} from "../constants";

export const fetchBooks = () => ({
	type: FETCH_BOOKS,
});

export const setBooks = ({ books }) => {
	return {
		type: SET_BOOKS,
		books
	};
};

export const addBook = ({ 
	id, 
	authors, 
	title,
	noOfPages,
	publisher, 
	lang, 
	isbn10,
	isbn13, 
	publicationDate
}) => {
	//console.log({ publicationDate });
	return {
		type: ADD_BOOK,
		payload: {
			id: +id,
			authors,
			title,
			noOfPages: +noOfPages,
			publisher,
			lang,
			isbn10: +isbn10,
			isbn13,
			publicationDate: {
				dd: publicationDate.dd,
				mm: publicationDate.mm,
				yyyy: publicationDate.yyyy
			}
		},
	};
};

export const editBook = ({ 
	id, 
	authors, 
	title,
	noOfPages,
	publisher, 
	lang, 
	isbn10,
	isbn13, 
	publicationDate,
}) => { 
	return {
		type: EDIT_BOOK,
		payload: {
			id: +id,
			authors,
			title,
			noOfPages: +noOfPages,
			publisher,
			lang,
			isbn10: +isbn10,
			isbn13,
			publicationDate: {
				dd: publicationDate.dd,
				mm: publicationDate.mm,
				yyyy: publicationDate.yyyy
			}
		},
	};
};



export const deleteBook = id => {
	return {
		type: DELETE_BOOK,
		payload: +id,
	};
};