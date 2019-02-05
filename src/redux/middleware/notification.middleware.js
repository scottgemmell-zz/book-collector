import { SET_NOTIFICATION, setNotification, removeNotification } from "../actions/notifications.actions";

export const notificationMiddleware = () => next => action => {
	
	if(action.type.includes(SET_NOTIFICATION)) {
		//
		const { payload, meta, meta: { history } } = action;
		const id = new Date().getMilliseconds();

		const notification = {
			id: +id,
			message: payload,
		};

		next(setNotification({ message: notification, feature: meta.feature }));

		const timeout = (ms) => {
			return new Promise(resolve => setTimeout(resolve, ms));
		};

		const removeNotificationRedirect = async () => {
			await timeout(3000);
			// TODO: Redirect console.log("Redirect");
			history.push("/404");
			return next(removeNotification({ notificationId: +id, feature: meta.feature }));
		};

		removeNotificationRedirect();

	} else {
		next(action);
	}
};