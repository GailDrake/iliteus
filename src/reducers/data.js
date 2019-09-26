/* eslint no-tabs: "off", indent: "off" */

const initialState = {
	dataReady: false,
	fetchingData: false,

	fakeData: [],
};

const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'requestingData':
			return Object.assign({}, state, {
				fetchingData: true,
			});
		case 'receiveData':
			console.log(action.data);
			return Object.assign({}, state, {
				dataReady: true,
				fetchingData: false,
				fakeData: ['foo', 'bar'],
			});

		default:
			return state;
	}
};

export default dataReducer;
