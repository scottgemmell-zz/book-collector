import { 
	ADD_BOOK, 
	FETCH_BOOKS, 
	DELETE_BOOK, 
	EDIT_BOOK,
} from "../constants";

const initState = [];

export const booksReducer = (state = initState, action) => {

	console.log({ state, action})

	switch(action.type) {
	
		case DELETE_BOOK:
			return state.filter(book => 
				book.id !== action.deleteId
			);
		case FETCH_BOOKS:
			return action.payload;
		case ADD_BOOK:
			return [
				...state,
				...action.payload,
			];
		case EDIT_BOOK:

			return state.map(book => book.id === action.id 
				? { ...book, author: action.author, title: action.title }
				: book
			);

		default:
			return state;
	}
};
