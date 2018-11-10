import * as Types from './../constants/ActionTypes';

var initialState = {};

const projectItem = (state = initialState, action) => {
    switch(action.type){
        case Types.ITEM_PROJECT:
            return action.project;
        default:
            return state;
    }
}

export default projectItem;
