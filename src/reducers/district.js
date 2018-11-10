import * as Types from './../constants/ActionTypes';
var initialState = [];

const district = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_DISTRICT:
            state = action.district;
            return [...state];
        default: return [...state];
    }
};

export default district;