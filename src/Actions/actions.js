const loadPhotoAction = (data) => {
    return dispatch => {
        dispatch({
            type: 'LOAD_REQUESTED_ACTION'
        });
        data
            .then(response => {
                dispatch({
                    type: 'LOAD_PHOTOS_SUCCESS_ACTION',
                    result: response,
                    name: 'listPhotos'
                });
            })
            .catch(error => {
                dispatch({
                    type: 'LOAD_FAILURE_ACTION',
                    payload: error
                });
            });
    }
};

const loadPhotosPhotographerAction = (data) => {
    return dispatch => {
        dispatch({
            type: 'LOAD_REQUESTED_ACTION'
        });
        data
            .then(response => {
                dispatch({
                    type: 'LOAD_PHOTOS_PHOTOGRAPHER_SUCCESS_ACTION',
                    result: response,
                    name: 'photosPhotographer'
                });
            })
            .catch(error => {
                dispatch({
                    type: 'LOAD_FAILURE_ACTION',
                    payload: error
                });
            });
    }
};

const loadSearchPhotosAction = (data, qwery) => {
    return dispatch => {
        dispatch({
            type: 'LOAD_REQUESTED_ACTION'
        });
        data
            .then(response => {
                dispatch({
                    type: 'LOAD_SEARCH_PHOTOS_ACTION',
                    result: response.results,
                    total: response.total,
                    pages: response.total_pages,
                    qwery: qwery,
                    name: 'searchPhotos'
                });
            })
            .catch(error => {
                dispatch({
                    type: 'LOAD_FAILURE_ACTION',
                    payload: error
                });
            });
    }
};

const loadProfileAction = (data) => {
    return dispatch => {
        dispatch({
            type: 'LOAD_REQUESTED_ACTION'
        });
        data
            .then(response => {
                dispatch({
                    type: 'LOAD_PROFILE_SUCCESS_ACTION',
                    result: response
                });
            })
            .catch(error => {
                dispatch({
                    type: 'LOAD_FAILURE_ACTION',
                    payload: error
                });
            });
    }
};

const loadPhotographerAction = (data) => {
    return dispatch => {
        dispatch({
            type: 'LOAD_REQUESTED_ACTION'
        });
        data
            .then(response => {
                dispatch({
                    type: 'LOAD_PHOTOGRAPHER_SUCCESS_ACTION',
                    result: response
                });
            })
            .catch(error => {
                dispatch({
                    type: 'LOAD_FAILURE_ACTION',
                    payload: error
                });
            });
    }
};

const loadPhotoDetailsAction = (data) => {
    return dispatch => {
        dispatch({
            type: 'LOAD_REQUESTED_ACTION'
        });
        data
            .then(response => {
                dispatch({
                    type: 'LOAD_DETAILS_SUCCESS_ACTION',
                    result: response
                });
            })
            .catch(error => {
                dispatch({
                    type: 'LOAD_FAILURE_ACTION',
                    payload: error
                });
            });
    }
}
    
const likePhotoAction = (id, status) => {
    return {
        type: 'LIKE_PHOTO_ACTION',
        id, status
    }
};

const disLikePhotoAction = (id, status) => {
    return {
        type: 'DISLIKE_PHOTO_ACTION',
        id, status
    }
};

const logOutAction = () => {
    return {
        type: 'LOG_OUT_ACTION'
    }
};

const logInAction = () => {
    return {
        type: 'LOG_IN_ACTION'
    }
};

const selectValueSortAction = (value) => {
    return {
        type: 'SELECT_VALUE_SORT_ACTION',
        value
    }
};

const handlerInputsValueAction = (value, id) => {
    return {
        type: 'HANDLER_INPUTS_VALUE_ACTION',
        value, id
    }
};

const handlerClickSearchAction = () => {
    return {
        type: 'HANDLER_CLICK_SEARCH_ACTION'
    }
};

const statsTotalAction = (data) => {
    return dispatch => {
        dispatch({
            type: 'LOAD_REQUESTED_ACTION'
        });
        data
            .then(response => {
                dispatch({
                    type: 'LOAD_STATS_SUCCESS_ACTION',
                    result: response
                });
            })
            .catch(error => {
                dispatch({
                    type: 'LOAD_FAILURE_ACTION',
                    payload: error
                });
            });
    }
};

export {
    loadPhotoAction,
    loadSearchPhotosAction, 
    loadProfileAction,
    loadPhotographerAction,
    loadPhotoDetailsAction,
    logOutAction,
    logInAction, 
    likePhotoAction, 
    disLikePhotoAction,
    selectValueSortAction,
    handlerInputsValueAction,
    handlerClickSearchAction,
    statsTotalAction,
    loadPhotosPhotographerAction
}