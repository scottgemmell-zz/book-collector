import { 
	ADD_BOOK, 
	SET_BOOKS,
	DELETE_BOOK, 
	EDIT_BOOK,
} from "../constants";

const initState = [];

export const booksReducer = (books = initState, action) => {
	
	switch(action.type) {
	
	case SET_BOOKS:
		return action.books;

	case DELETE_BOOK:
		
		return books.filter(book => 
			+book.id !== +action.payload
		);
	
	case ADD_BOOK:
		return [
			...books,
			{
				id: action.payload.id,
				title: action.payload.title,
				bookTitle: action.payload.bookTitle,
				author: action.payload.author,
				noOfPages: action.payload.noOfPages,
				publisher: action.payload.publisher, 
				lang: action.payload.lang, 
				isbn10: action.payload.isbn10,
				isbn13: action.payload.isbn13, 
				publicationDate: action.payload.publicationDate
			}
		];
	case EDIT_BOOK:
		return books.map(book => +book.id === +action.payload.id 
			? { 
				...book, 
				id: action.payload.id,
				author: action.payload.author, 
				title: action.payload.title,
				bookTitle: action.payload.bookTitle,
				noOfPages: action.payload.noOfPages,
				publisher: action.payload.publisher, 
				lang: action.payload.lang, 
				isbn10: action.payload.isbn10,
				isbn13: action.payload.isbn13, 
				publicationDate: action.payload.publicationDate
			}
			: book
		);
	default:
		return books;
	}
	
};
