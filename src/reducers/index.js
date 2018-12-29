import { combineReducers } from 'redux';
import district from './district';
import about from './about';
import project from './project';
import news from './news';
import newsItem from './newsItem';
import projectItem from './projectItem';

const appReducers = combineReducers({
    district,
    project,
    news,
    newsItem,
    projectItem,
    about
});

export default appReducers;