import * as R from "ramda";
import { dataNormalized } from "../actions/data.actions";

export const normalizeMiddleware = ({ dispatch }) => next => action => {

	if(action.type.includes("SET") && action.meta.normalizeKey) {
		
		// notify about the transformation
		dispatch(dataNormalized({ feature: action.meta.feature }));

		// {

		// 	"isbn10": 9780000000,
		// 	"isbn13": "978-0000000000",
		// },

		// transform the data structure
		const books = action.payload.map(book => {
			//book.id = book.id;
			book = { id: book.id, ...book.volumeInfo };
			book.authors = book.authors[0];
			
			book.lang = book.language;
			delete book.language;

			const dateVal = book.publishedDate.split("-");
			book.publicationDate = {
				dd: dateVal[2],
				mm: dateVal[1],
				yyyy: dateVal[0]
			};
			delete book.publishedDate;

			book.isbn10 = book.industryIdentifiers[0].identifier;
			book.isbn13 = book.industryIdentifiers[1].identifier;
			delete book.industryIdentifiers;

			return book;
		});

		// fire the books document action
		next({...action, payload: books, normalizeKey: null });

	} else {
		next(action);
	}
};