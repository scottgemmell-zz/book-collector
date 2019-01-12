import { ADD_BOOK, SET_BOOKS } from "../constants";

const initState = {};

export const booksReducer = (books = initState, action) => {
	switch(action.type) {
		
		case SET_BOOKS:
			return action.payload;
		case ADD_BOOK:
			return action.payload;
		default:
			return books;
	}
};
