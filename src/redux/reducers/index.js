import { combineReducers } from "redux";
import { booksReducer } from "./books.reducer";
import { notificationReducer } from "./notification.reducer";
import { uiReducer } from "./ui.reducer";

const rootReducer = combineReducers({
	books: booksReducer,
	notification: notificationReducer,
	ui: uiReducer,
});

export default rootReducer;