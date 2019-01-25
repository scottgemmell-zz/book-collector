export const SET_NOTIFICATION = "SET_NOTIFICATION";

export const setNotification = ({ message, status, feature }) => ({
	type: SET_NOTIFICATION,
	payload: message,
	meta: { 
		status,
		feature
	}
});