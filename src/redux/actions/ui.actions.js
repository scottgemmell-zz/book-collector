export const SET_LOADER = "SET_LOADER";

export const setLoader = ({ state, feature }) => ({
	type: SET_LOADER,
	payload: state,
	meta: { feature }
});