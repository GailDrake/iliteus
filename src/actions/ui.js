// Set window dimentions for the whole app
export function setWindowSize(windowSize) {
	return {
		type: "setWindowSize",
		windowSize,
	};
}

export function putFocusBack() {
	return {
		type: "putFocusBack",
	};
}

export function closeSideMenu() {
	return {
		type: "closeSideMenu",
	};
}
export function toggleSideMenu() {
	return (dispatch, getState) => {
		const isSideMenuOpen = getState().ui.sideMenuOpen;
		dispatch({ type: isSideMenuOpen ? "closeSideMenu" : "openSideMenu" });
	};
}
