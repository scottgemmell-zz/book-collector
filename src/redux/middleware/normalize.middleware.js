// import * as R from "ramda";
import { dataNormalized } from "../actions/data.actions";

export const normalizeMiddleware = ({ dispatch }) => next => action => {

	if(action.type.includes("SET") && action.meta.normalizeKey) {
		
		// notify about the transformation
		dispatch(dataNormalized({ feature: action.meta.feature }));

		// transform the data structure
		const books = action.payload.map(book => {
			
			book = { id: book.id, ...book.volumeInfo };
			
			book.authors = book.authors[0];
			book.lang = book.language;
			const dateVal = book.publishedDate.split("-");
			const full = (dateVal && dateVal[2] || dateVal[2]  !== undefined) ? `${dateVal[2]}-${dateVal[1]}-${dateVal[0]}` : dateVal[0] ;
			book.publicationDate = {
				dd: dateVal[2],
				mm: dateVal[1],
				yyyy: dateVal[0],
				full,
			};
			book.isbn10 = book.industryIdentifiers[0].identifier;
			book.isbn13 = book.industryIdentifiers[1].identifier;
			
			delete book.language;
			delete book.publishedDate;
			delete book.industryIdentifiers;
			delete book.description;
			delete book.categories;
			delete book.averageRating;
			delete book.ratingsCount;
			delete book.imageLinks;
			delete book.readingModes;
			delete book.printType;
			delete book.maturityRating;
			delete book.allowAnonLogging;
			delete book.contentVersion;
			delete book.previewLink;
			delete book.infoLink;
			delete book.canonicalVolumeLink;

			return book;
		});

		// fire the books document action
		next({...action, payload: books, normalizeKey: null });

	} else {
		next(action);
	}
};