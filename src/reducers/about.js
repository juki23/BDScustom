import * as Types from './../constants/ActionTypes';
var initialState = [];

const about = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ABOUT:
            state = action.about;
            return [...state];
        default: return [...state];
    }
};

export default about;