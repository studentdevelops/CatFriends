import {
    SEARCH_FIELD_CHANGE,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_FAILED,
} from './constants'


const initialState = {
    searchField: '',
};

export const searchCats = (state = initialState, action = {}) => {
    switch (action.type) {
        case SEARCH_FIELD_CHANGE:
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state;
    }
}

const initialStateCats = {
    cats: [],
    error:'',
    isPending: ''
}

export const requestCats = (state = initialStateCats, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });

        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {
                cats: action.payload,
                isPending: true
            })

        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {
                isPending: false,
                error: action.payload
            });
        default:
            return state;
    }
}