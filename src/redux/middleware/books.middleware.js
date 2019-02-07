import { BOOKS, ADD_BOOK, DELETE_BOOK, FETCH_BOOKS, EDIT_BOOK } from "../constants";
import { setBooks } from "../actions/books.actions.js";
import { API_ERROR, apiRequest, API_SUCCESS } from "../actions/api.actions";
import { setLoader } from "../actions/ui.actions";
import { setNotification } from "../actions/notifications.actions";

function getBookListUrl(){
	return "http://localhost:3001/books/"; 
}

function getBookByIdUrl(id){
	return `http://localhost:3001/books/${id}`; 
}

export const booksMiddleware = () => next => action => {
	next(action);
	switch(action.type) {
		
	case ADD_BOOK:
		next(setLoader({ state: true, feature: BOOKS }));
		next(
			apiRequest({ 
				body: JSON.stringify(action.payload),
				method: "POST",
				url: getBookListUrl(), 
				feature: BOOKS, 
			})
		);
		break;

	case EDIT_BOOK:
		next(setLoader({ state: true, feature: BOOKS }));
		next(
			apiRequest({ 
				body: JSON.stringify(action.payload),
				method: "PUT", 
				url: getBookByIdUrl(action.payload.id), 
				feature: BOOKS, 
			})
		);
		break;
	
	case DELETE_BOOK:
		next(setLoader({ state: true, feature: BOOKS }));
		next(
			apiRequest({ 
				body: null,
				method: "DELETE", 
				url: getBookByIdUrl(action.payload), 
				feature: BOOKS, 
			})
		);
		break;
	
	case FETCH_BOOKS:
		next(setLoader({ state: true, feature: BOOKS }));
		next(
			apiRequest({ 
				body: null, 
				method: "GET", 
				url: getBookListUrl(), 
				feature: BOOKS,
			})
		);
		break;
	
	case `${BOOKS} ${API_SUCCESS}`:
		if (Array.isArray(action.payload) || action.payload === null) {
			next(setBooks({ books: action.payload }));
		}
		next(setLoader({ state: false, feature: BOOKS }));
		break;

	case `${BOOKS} ${API_ERROR}`:
		next(setNotification({ message: action.payload.message, feature: BOOKS }));
		next(setLoader({ state: false, feature: BOOKS }));
		break;

	default:
		break;
	}
};