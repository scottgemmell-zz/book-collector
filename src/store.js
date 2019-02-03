import { createStore, applyMiddleware } from "redux";

import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./redux/reducers";
import { booksMiddleware } from "./redux/middleware/books.middleware";
import { apiMiddleware } from "./redux/middleware/api.middleware";
import thunk from "redux-thunk";

const logger = createLogger({
	// ...options
	collapsed: true,
	diff: true,
});

const composeEnhancers = composeWithDevTools({
	// Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

// create the feature middleware array
const featureMiddleware = [
	booksMiddleware,
];

// create the core middleware array
const coreMiddleware = [
	apiMiddleware,
];
//

const store = createStore(
	rootReducer, /* preloadedState, */ 
	composeEnhancers(
		applyMiddleware(
			thunk, 
			...featureMiddleware, ...coreMiddleware,
			logger,
		),
		// other store enhancers if any
	)
);

export default store;