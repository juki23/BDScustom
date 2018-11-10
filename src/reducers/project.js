import * as Types from './../constants/ActionTypes';
var initialState = [];

const project = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PROJECT:
            state = action.project;
            return [...state];
        default: return [...state];
    }
};

export default project;