// import * as R from "ramda";

import { BOOKS } from "../constants";
import { dataNormalized } from "../actions/data.actions";
import { setNotification } from "../actions/notifications.actions";

export const normalizeMiddleware = ({ dispatch }) => next => action => {

	if(action.type.includes("SET") && action.meta.normalizeKey) {
		
		// notify about the transformation
		dispatch(dataNormalized({ feature: action.meta.feature }));

		const checkValidity = (control, variable, type) => {
			if (type === "array") {
				if (!Array.isArray(variable)) {
					return true;
				}
				return control;
			}  
			if (variable && typeof variable !== type) {
				return true;
			}
			return control;
		};

		const isInvalidBook = (book) => {
			
			let invalid = false;
			const { 
				id, 
				volumeInfo, 
				volumeInfo: { 
					authors,
					title,
					//pageCount,
					publisher,
					language,
					//industryIdentifiers,
					publishedDate,
				} 
			} = book; 

			invalid = checkValidity(invalid, id, "number");
			invalid = checkValidity(invalid, volumeInfo, "object");
			invalid = checkValidity(invalid, authors, "array");
			invalid = checkValidity(invalid, title, "string");
			//invalid = checkValidity(invalid, pageCount, "number");
			invalid = checkValidity(invalid, publisher, "string");
			invalid = checkValidity(invalid, language, "string");
			invalid = checkValidity(invalid, publishedDate, "string");
			//invalid = checkValidity(invalid, industryIdentifiers[0].identifier, "string");
			//invalid = checkValidity(invalid, industryIdentifiers[1].identifier, "string");
			
			return invalid;
		};

		// transform the data structure
		const books = Array.isArray(action.payload) && action.payload.map(book => {

			if(isInvalidBook(book)) {
				book.error = true;
				
				//next(setNotification({ id: 7, message: "Lorem ipsum dolor", feature: BOOKS }));
				return book;

			} else {
				book = { id: book.id, ...book.volumeInfo };
				
				book.authors = book.authors[0];
				book.lang = book.language;
				const dateVal = book.publishedDate.split("-");
				const full = (dateVal && (dateVal[1] || dateVal[2] !== undefined)) ? `${dateVal[2]}-${dateVal[1]}-${dateVal[0]}` : dateVal[0] ;
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
			}

			
		});

		// fire the books document action
		next({...action, payload: books, normalizeKey: null });

	} else {
		next(action);
	}
};