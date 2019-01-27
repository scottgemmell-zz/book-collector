import { 
	ADD_BOOK, 
	SET_BOOKS,
	DELETE_BOOK, 
	// EDIT_BOOK,
} from "../constants";

const initState = [];

export const booksReducer = (books = initState, action) => {
	switch(action.type) {
	
		case DELETE_BOOK:
			return books.filter(book => 
				+book.id !== +action.payload
			);
		case SET_BOOKS:
			return action.payload;
		case ADD_BOOK:
			return [
				...books,
				{
					id: action.payload.id,
					title: action.payload.title,
					author: action.payload.author,
				}
			];
		// case EDIT_BOOK:
		// 	return state.map(book => book.id === action.id 
		// 		? { ...book, author: action.author, title: action.title }
		// 		: book
		// 	);

		default:
			return books;
	}
};
