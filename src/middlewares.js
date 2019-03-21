import { createLogger } from "redux-logger";
import { booksMiddleware } from "./redux/middleware/books.middleware";
import { apiMiddleware } from "./redux/middleware/api.middleware";
import thunk from "redux-thunk";
import { notificationMiddleware } from "./redux/middleware/notification.middleware";
import { normalizeMiddleware } from "./redux/middleware/normalize.middleware";

const logger = createLogger({
	collapsed: true,
	diff: true,
});

// create the feature middleware array
const featureMiddleware = [
	booksMiddleware,
	notificationMiddleware,
];

// create the core middleware array
const coreMiddleware = [
	apiMiddleware,
	normalizeMiddleware,
];
//

export const middlewares = [thunk, ...featureMiddleware, ...coreMiddleware, logger];