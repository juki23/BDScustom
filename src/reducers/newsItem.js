import * as Types from './../constants/ActionTypes';

var initialState = {};

const newsItem = (state = initialState, action) => {
    switch(action.type){
        case Types.ITEM_NEWS:
            return action.news;
        default:
            return state;
    }
}

export default newsItem;
