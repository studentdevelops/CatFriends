import {
    SEARCH_FIELD_CHANGE,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_FAILED,
} from './constants'



export const setSearchField = (text) => ({
    type: SEARCH_FIELD_CHANGE,
    payload: text
});

export const requestCats = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING })
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((catList) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: catList }))
        .catch((err) => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }))
};