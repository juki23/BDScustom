import { combineReducers } from 'redux';
import district from './district';
import project from './project';
import news from './news';
import newsItem from './newsItem';
import projectItem from './projectItem';

const appReducers = combineReducers({
    district,
    project,
    news,
    newsItem,
    projectItem
});

export default appReducers;