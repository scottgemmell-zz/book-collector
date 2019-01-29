import { 
	//BOOKS, 
	ADD_BOOK, 
	FETCH_BOOKS,
	SET_BOOKS,
	EDIT_BOOK, 
	DELETE_BOOK, 
} from "../constants";

export const addBook = ({ id, author, title }) => {
	//console.log("addBook", { book });
	return {
		type: ADD_BOOK,
		payload: {
			[+id]:{
				id,
				author,
				title,
			}
		},
	};
};

export const fetchBooks = () => ({
	type: FETCH_BOOKS,
	//payload: books,
});

export const setBooks = ({ books }) => {
	if ( typeof books === "undefined") {
		return {
			type: "DO_NOTHING"
		};
	}
	return {
		type: SET_BOOKS,
		books
	};
};

// export const setBooks = ({ books }) => ({
// 	type: SET_BOOKS,
// 	books
// });

// type: SET_BOOKS,
// 	payload: books

// export const setBooks = ({ books }) => dispatch => { 
    // if (!books) {
    //     return dispatch({
    //         type: "DO_NOTHING"
    //     })
    // }
    // return dispatch({
    //     type: SET_BOOKS,
    //     payload: books
    // })
// };

// [book.id]: { 
// 	id: book.id,
// 	author: book.author, 
// 	title: book.title 
// }

export const editBook = ({ id, author, title }) => ({
	type: EDIT_BOOK,
	payload: {
		[+id]:{
			id,
			author,
			title
		}
	}
});



export const deleteBook = id => {
	console.log("id", id)
	return {
		type: DELETE_BOOK,
		payload: id,
	}
};