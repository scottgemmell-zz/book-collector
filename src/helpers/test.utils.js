// import configureStore from "redux-mock-store";
// import {createStore, applyMiddleware} from "redux";
// import { middlewares } from "../store";
// import rootReducer from "../redux/reducers";

// export const storeFactory = initialState => {
// 	const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
// 	return createStoreWithMiddleware(rootReducer, initialState);
// };

/**
 * Return node(s) with given data-test attribute.
 * @param  {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param  {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`);
};