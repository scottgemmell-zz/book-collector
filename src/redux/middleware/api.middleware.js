import { API_REQUEST, apiSuccess, apiError} from "../actions/api.actions";

export const apiMiddleware = ({ dispatch }) => next => action => {
	next(action); 

	if(action.type.includes(API_REQUEST)) {
		const { url, method, feature } = action.meta;

		console.log({url, method, feature});
		
		fetch(url, { method })
			.then( (response) => {
				if (response.status >= 200 && response.status < 300) {
					return response;
				} else {
					// @TODO: Not found / Failed to fetch
					throw Error(response.statusText);
				}
			})
			.then( response => response.json())
			.then( data => dispatch(apiSuccess(data, feature)))
			.catch( error => dispatch(apiError({ error, feature })));
	} 
};