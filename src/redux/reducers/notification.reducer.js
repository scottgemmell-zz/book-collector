import { SET_NOTIFICATION } from "../actions/notifications.actions.js";

const initState = {
	message: "",
};

export const notificationReducer = (state = initState, action) => {
	switch(true) {
	
	case action.type.includes(SET_NOTIFICATION):
		return { 
			...state, 
			message: action.payload,
			// status: 400,
		};
	default:
		return state;
	}
};