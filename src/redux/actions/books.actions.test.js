import { fetchBooks, setBooks, addBook, editBook, deleteBook } from "./books.actions";

describe("Books actions", () => {

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

	it("fetchBooks", () => {
		const action = fetchBooks();
		expect(action).toEqual({ type: "[Books] FETCH"});
	});

	it("setBooks", () => {
		const action = setBooks({ books});
		expect(action).toEqual({ type: "[Books] SET", books});
	});

	it("addBook", () => {
		const action = addBook(books[0]);
		expect(action).toEqual({ type: "[Books] ADD_BOOK", payload: books[0] });
	});

	it("editBook", () => {
		const action = editBook(books[0]);
		expect(action).toEqual({ type: "[Books] EDIT_BOOK", payload: books[0] });
	});

	it("deleteBook", () => {
		const action = deleteBook(2);
		expect(action).toEqual({ type: "[Books] DELETE_BOOK", payload: 2});
	});
});