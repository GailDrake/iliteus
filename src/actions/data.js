import fetch from "cross-fetch";

// load data
export function fetchData() {
  return dispatch => {
    dispatch({ type: "requestingData" });
    dispatch({ type: "receiveData" });
  };
}
