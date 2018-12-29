import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

// BDS DISTRICT

export const actFetchDistrictRequest = () => {
    return dispatch => {
        return callApi('getAllDistricts', 'GET', null).then(res => {
            dispatch(actFetchDistrict(res.data));
        });
    };
}

export const actFetchDistrict = (district) => {
    return {
        type : Types.FETCH_DISTRICT,
        district
    }
}

// BDS PROJECT

export const actFetchProjectRequest = () => {
    return dispatch => {
        return callApi('getAllProjects', 'GET', null).then(res => {
            dispatch(actFetchProject(res.data));
        });
    };
}

export const actFetchProjectByDistrictRequest = (id) => {
    return dispatch => {
        return callApi(`getProjectByDistrict/${id}`, 'GET', null).then(res => {
            dispatch(actFetchProject(res.data));
        });
    };
}

export const actFetchProject = (project) => {
    return {
        type : Types.FETCH_PROJECT,
        project
    }
}

export const actGetProjectRequest = (id) => {
    return dispatch => {
        return callApi(`getProject/${id}`, 'GET', null).then(res => {
            dispatch(actGetProject(res.data[0]));
        });
    }
}

export const actGetProject = (project) => {
    return {
        type : Types.ITEM_PROJECT,
        project
    }
}

// BDS NEWS

export const actFetchNewsRequest = () => {
    return dispatch => {
        return callApi('getAllNews', 'GET', null).then(res => {
            dispatch(actFetchNews(res.data));
        });
    };
}

export const actFetchNews = (news) => {
    return {
        type : Types.FETCH_NEWS,
        news
    }
}

export const actGetNewsRequest = (id) => {
    return dispatch => {
        return callApi(`getNews/${id}`, 'GET', null).then(res => {
            dispatch(actGetNews(res.data[0]));
        });
    }
}

export const actGetNews = (news) => {
    return {
        type : Types.ITEM_NEWS,
        news
    }
}

// BDS ABOUT

export const actFetchAboutRequest = () => {
    return dispatch => {
        return callApi('getAllAbouts', 'GET', null).then(res => {
            dispatch(actFetchAbout(res.data));
        });
    };
}

export const actFetchAbout = (about) => {
    return {
        type : Types.FETCH_ABOUT,
        about
    }
}

// BDS CONTACT

export const actAddContactRequest = (contact) => {
    return dispatch => {
        return callApi('insertContact', 'POST', contact).then(res => {
            dispatch(actAddContact(res.data));
        });
    }
}

export const actAddContact = (contact) => {
    return {
        type : Types.ADD_CONTACT,
        contact
    }
}