export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

export function apiRequest({ body, method, url, feature }) { 
	return {
		type: `${feature} ${API_REQUEST}`,
		payload: body,
		meta: { method, url, feature }
	};
}

export const apiSuccess = (response, feature) => ({
	type: `${feature} ${API_SUCCESS}`,
	payload: response,
	meta: { feature }
});

export const apiError = ({ error, feature }) => {
	console.log(error);

	return {
		type: `${feature} ${API_ERROR}`,
		payload: error,
		meta: { feature }
	}
};