import fetch from "isomorphic-fetch";

// load data
export function fetchData() {
	return (dispatch) => {
		dispatch({ type: 'requestingData' });
		dispatch({ type: 'receiveData' });
	};
}
