import { BOOKS, ADD_BOOK, DELETE_BOOK, FETCH_BOOKS, EDIT_BOOK } from "../constants";
import { 
	// addBook, 
	// editBook, 
	// deleteBook, 
	setBooks,
	fetchBooks, 
} from "../actions/books.actions.js";
import { API_ERROR, apiRequest, API_SUCCESS } from "../actions/api.actions";
//import { setLoader } from "../actions/ui.actions";
// import { setNotification } from "../actions/notifications.actions.js";
// import { database } from "../../database/config.js"; 

// export const startEditingBook = book => (dispatch) => {
// 	return database.ref(`books/${book.id}`).set({ 
// 		id: book.id, 
// 		author: book.author, 
// 		title: book.title, 
// 	}).then(() => {
// 		dispatch(editBook(book));
// 	}).catch((error) => {
// 		console.log(error);
// 	});
// };

// export const startFetchingBooks = () => (dispatch) => {
// 	return database.ref("books").once("value").then((snapshot) => {
// 		const books = [];
// 		snapshot.forEach((childSnapshot) => {
// 			books.push(childSnapshot.val());
// 		});
// 		dispatch(fetchBooks(books));
// 	}).catch((error) => {
// 		console.log(error);
// 	});
// };

// export const startDeletingBook = index => (dispatch) => {
// 	return database.ref(`books/${index}`).remove()
// 		.then(() => {
// 			dispatch(deleteBook(index));
// 		}).catch((error) => {
// 			console.log(error);
// 		});
// };

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
	//console.log("ap:", action.payload)
		//next(setBooks());
	next(setBooks({ books: action.payload }));
		//next(setNotification({ message: "", feature: BOOKS }));
		//next(setLoader({ state: false, feature: BOOKS }));
		break;

	case `${BOOKS} ${API_ERROR}`:
		//next(setBooks());
	next(setBooks({ books: action.payload }));
		// next(setNotification({ 
		// 	message: action.payload.message, 
		// 	// status: action.payload.status, 
		// 	feature: BOOKS 
		// }));
		//next(setLoader({ state: false, feature: BOOKS }));
		break;

	default:
		break;
	}
};