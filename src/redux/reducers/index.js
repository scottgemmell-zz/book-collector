import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { booksReducer } from "./books.reducer";
import { notificationReducer } from "./notification.reducer";
import { uiReducer } from "./ui.reducer";
import matchReducer from "./match.reducer";

const rootReducer = combineReducers({
	books: booksReducer,
	notification: notificationReducer,
	ui: uiReducer,
	form: formReducer,
	match: matchReducer,
});

export default rootReducer;