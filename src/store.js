import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./redux/reducers";
import { middlewares } from "./middlewares";

const composeEnhancers = composeWithDevTools({
	// Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
	rootReducer, /* preloadedState, */ 
	composeEnhancers(
		applyMiddleware(
			...middlewares
		),
		// other store enhancers if any
	)
);

export default store;