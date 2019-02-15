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

	const newBook = {
		"id": 2,
		"author": "Roald Dahl",
		"title": "Miss",
		"bookTitle": "Fantastic Mr. Fox",
		"noOfPages": 1005,
		"publisher": "Penguin",
		"lang": "en",
		"isbn10": 9780000005,
		"isbn13": "555-5555555555",
		"publicationDate": "05-05-1975"
	};

	it("returns empty initialState", () => {
		const newState = booksReducer(undefined, {});
		expect(newState).toEqual([]);
	});

	it("Set", () => {
		const newState = booksReducer(undefined, { type: "[Books] SET", books});
		expect(newState).toEqual(books);
	});

	it("Add", () => {
		const newState = booksReducer(books, { type: "[Books] ADD_BOOK", payload: newBook});
		expect(newState).toEqual([...books, newBook]);
	});

	it("Edit where payload.id === book.id", () => {
		const newState = booksReducer(books, { type: "[Books] EDIT_BOOK", payload: newBook});
		expect(newState).toEqual([newBook]);
	});

	it("Edit where payload.id !== book.id", () => {
		const newState = booksReducer(books, { type: "[Books] EDIT_BOOK", payload: { "id": 7 }});
		expect(newState).toEqual(books);
	});

	it("Delete", () => {
		const newState = booksReducer(books, { type: "[Books] DELETE_BOOK", payload: 2 });
		expect(newState).toEqual([]);
	});

});