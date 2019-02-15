import { booksReducer } from "./books.reducer";

describe("booksReducer", () => {

	const books = [{
		"id": 2,
		"author": "Roald Dahl",
		"title": "Mr",
		"bookTitle": "Fantastic Mr. Fox",
		"noOfPages": 1002,
		"publisher": "Penguin",
		"lang": "en",
		"isbn10": 9780000002,
		"isbn13": "222-2222222222",
		"publicationDate": "02-02-1972"
	}];

	it("returns empty initialState", () => {
		const newState = booksReducer(undefined, {});
		expect(newState).toEqual([]);
	});

	it("Set", () => {
		const newState = booksReducer(undefined, { type: "[Books] SET", books});
		expect(newState).toEqual(books);
	});

	it("Add", () => {
		const newState = booksReducer(undefined, { type: "[Books] ADD_BOOK", payload: books[0]});
		expect(newState).toEqual(books);
	});

	it("Edit", () => {
		const newState = booksReducer(books, { type: "[Books] EDIT_BOOK", payload: books[0]});
		expect(newState).toEqual(books);
	});

	it("Delete", () => {
		const newState = booksReducer(books, { type: "[Books] DELETE_BOOK", payload: 2 });
		expect(newState).toEqual([]);
	});

});