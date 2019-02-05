export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

export function apiRequest({ body, method, url, feature, history }) { 
	return {
		type: `${feature} ${API_REQUEST}`,
		payload: body,
		meta: { method, url, feature, history }
	};
}

export const apiSuccess = (response, feature) => {
	return {
		type: `${feature} ${API_SUCCESS}`,
		payload: response,
		meta: { feature }
	};
};

export const apiError = (error, feature, history) => {
	return {
		type: `${feature} ${API_ERROR}`,
		payload: error,
		meta: { feature, history }
	};
};