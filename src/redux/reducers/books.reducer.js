import { 
	ADD_BOOK, 
	SET_BOOKS,
	DELETE_BOOK, 
	EDIT_BOOK,
} from "../constants";

const initState = [];

export const booksReducer = (books = initState, action) => {
	
	switch(action.type) {
	
	case DELETE_BOOK:
		
		return books.filter(book => 
			+book.id !== +action.books
		);
	case SET_BOOKS:
		return action.books;
	case ADD_BOOK:
		return [
			...books,
			{
				id: action.payload.id,
				title: action.payload.title,
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
		return books.map(book => +book.id === +action.id 
			? { 
				// ...book, 
				id: action.id,
				author: action.author, 
				title: action.title,
				noOfPages: action.noOfPages,
				publisher: action.publisher, 
				lang: action.lang, 
				isbn10: action.isbn10,
				isbn13: action.isbn13, 
				publicationDate: action.publicationDate  
			}
			: book
		);
	default:
		return books;
	}
	
};
