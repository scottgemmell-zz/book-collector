import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { booksReducer } from "./books.reducer";
import { notificationReducer } from "./notification.reducer";
import { uiReducer } from "./ui.reducer";

const rootReducer = combineReducers({
	books: booksReducer,
	notification: notificationReducer,
	ui: uiReducer,
	form: formReducer,
});

export default rootReducer;