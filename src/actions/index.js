import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return dispatch => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type : Types.ADD_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data));
        });
    }
}

export const actGetProduct = (product) => {
    return {
        type : Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}

export const actUpdateProduct = (product) => {
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }
}

// BDS DISTRICT

export const actFetchDistrictRequest = () => {
    return dispatch => {
        return callApi('district', 'GET', null).then(res => {
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
        return callApi('project', 'GET', null).then(res => {
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
        return callApi(`project/${id}`, 'GET', null).then(res => {
            dispatch(actGetProject(res.data));
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
        return callApi('news', 'GET', null).then(res => {
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
        return callApi(`news/${id}`, 'GET', null).then(res => {
            dispatch(actGetNews(res.data));
        });
    }
}

export const actGetNews = (news) => {
    return {
        type : Types.ITEM_NEWS,
        news
    }
}