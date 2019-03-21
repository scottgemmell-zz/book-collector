import { 
	BOOKS,
	ADD_BOOK, 
	FETCH_BOOKS,
	SET_BOOKS,
	EDIT_BOOK, 
	DELETE_BOOK, 
} from "../constants";

export const fetchBooks = () => ({
	type: FETCH_BOOKS,
	meta: { feature: BOOKS }
});

export const setBooks = ({ books, normalizeKey }) => {
	return {
		type: SET_BOOKS,
		payload: books,
		meta: { normalizeKey, feature: BOOKS }
	};
};

export const addBook = ({ 
	id, 
	authors, 
	title,
	pageCount,
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
			pageCount: +pageCount,
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
		meta: { feature: BOOKS }
	};
};

export const editBook = ({ 
	id, 
	authors, 
	title,
	pageCount,
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
			pageCount: +pageCount,
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
		meta: { feature: BOOKS }
	};
};



export const deleteBook = id => {
	return {
		type: DELETE_BOOK,
		payload: +id,
		meta: { feature: BOOKS }
	};
};