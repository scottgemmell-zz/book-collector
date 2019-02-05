export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";

export const setNotification = ({ message, feature, history }) => ({
	type: `${feature} ${SET_NOTIFICATION}`,
	payload: message,
	meta: { 
		feature, 
		history 
	}
});

export const removeNotification = ({ notificationId, feature }) => ({
	type: `${feature} ${REMOVE_NOTIFICATION}`,
	payload: notificationId,
	meta: { feature }
})