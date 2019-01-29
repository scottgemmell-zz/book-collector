import { BOOKS, ADD_BOOK, DELETE_BOOK, FETCH_BOOKS, EDIT_BOOK } from "../constants";
import { setBooks } from "../actions/books.actions.js";
import { API_ERROR, apiRequest, API_SUCCESS } from "../actions/api.actions";
//import { setLoader } from "../actions/ui.actions";

function getBookUrlById(id){
	return `https://books-collector.firebaseio.com/books/${id}.json`;
}
function getBookListUrl(){
	return "https://books-collector.firebaseio.com/books.json"; 
}

export const booksMiddleware = () => next => action => {
	next(action);
	switch(action.type) {
		
	case ADD_BOOK:
		next(
			apiRequest({ 
				body: JSON.stringify(action.payload),
				method: "PATCH",
				//method: "POST", 
				url: getBookListUrl(), 
				feature: BOOKS, 
			})
		);
		break;

	case EDIT_BOOK:
		next(
			apiRequest({ 
				body: JSON.stringify(action.payload),
				method: "PATCH", 
				url: getBookListUrl(), 
				feature: BOOKS, 
			})
		);
		break;
	
	case DELETE_BOOK:
		next(
			apiRequest({ 
				body: null,
				method: "DELETE", 
				url: getBookUrlById(action.payload), 
				feature: BOOKS, 
			})
		);
		break;
	
	case FETCH_BOOKS:
		next(
			apiRequest({ 
				body: null, 
				method: "GET", 
				url: getBookListUrl(), 
				feature: BOOKS,
			})
		);
		//next(setLoader({ state: true, feature: BOOKS }));
		break;
	
	case `${BOOKS} ${API_SUCCESS}`:
		//next(setBooks());
		console.log({books: action.payload});
		if (Array.isArray(action.payload)) {
			next(setBooks({ books: action.payload }));
		}
		//next(setLoader({ state: false, feature: BOOKS }));
		break;

	case `${BOOKS} ${API_ERROR}`:
		//next(setLoader({ state: false, feature: BOOKS }));
		break;

	default:
		break;
	}
};