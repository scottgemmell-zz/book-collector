import * as R from "ramda";
import { dataNormalized } from "../actions/data.actions";

export const normalizeMiddleware = ({ dispatch }) => next => action => {

	if(action.type.includes("SET") && action.meta.normalizeKey) {
		
		// notify about the transformation
		dispatch(dataNormalized({ feature: action.meta.feature }));

		// transform the data structure
		const books = action.payload.map(book => {
			book.title = R.toUpper(book.title);
			book.authors = R.toLower(book.authors);
			return book;
		});

		// fire the books document action
		next({...action, payload: books, normalizeKey: null });

	} else {
		next(action);
	}
};