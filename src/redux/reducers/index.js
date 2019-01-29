import { combineReducers } from "redux";
import { booksReducer } from "./books.reducer";
import { uiReducer } from "./ui.reducer";

const rootReducer = combineReducers({
	books: booksReducer,
	ui: uiReducer,
});

export default rootReducer;