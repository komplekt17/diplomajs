const loadPhotoAction = (data, itemEnd) => {
    return dispatch => {
        dispatch({
            type: 'LOAD_REQUESTED_ACTION'
        });
        data
            .then(response => {
                dispatch({
                    type: 'LOAD_PHOTOS_SUCCESS_ACTION',
                    result: response, 
                    end: itemEnd,
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

const photosPhotographerAction = (data, itemEnd) => {
    return dispatch => {
        dispatch({
            type: 'LOAD_REQUESTED_ACTION'
        });
        data
            .then(response => {
                dispatch({
                    type: 'LOAD_PHOTOS_PHOTOGRAPHER_SUCCESS_ACTION',
                    result: response, 
                    end: itemEnd,
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

const inputValueSearchAction = (value) => {
    return {
        type: 'INPUT_VALUE_SEARCH_ACTION',
        value
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
    likePhotoAction, 
    disLikePhotoAction, 
    loadProfileAction,
    loadPhotographerAction,
    loadPhotoDetailsAction,
    logOutAction,
    logInAction,
    selectValueSortAction,
    inputValueSearchAction,
    statsTotalAction,
    photosPhotographerAction
}