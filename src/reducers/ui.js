/* eslint no-tabs: "off", indent: "off" */

const initialState = {
	windowSize: { height: 0, width: 0 },
	showFocus: false, // show blue outline for focus?
	sideMenuOpen: false,
};

const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		// UI
		case "setWindowSize":
			return Object.assign({}, state, {
				windowSize: action.windowSize,
			});
		case "putFocusBack":
			return Object.assign({}, state, {
				showFocus: true,
			});
		case "closeSideMenu":
			return Object.assign({}, state, {
				sideMenuOpen: false,
			});
		case "openSideMenu":
			return Object.assign({}, state, {
				sideMenuOpen: true,
			});

		default:
			return state;
	}
};

export default uiReducer;
