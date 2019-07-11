const initialState = {
	photos: [],
	photosPhotographer: [],
	profileUser: {},
	profilePhotographer: {},
	photoDetails: {},
	startLoad: 0,
	finishLoad: 30,
	firstPhoto: 0,
	lastPhoto: 30,
	totalStats: {},
	sorting: 'popular',
	searchQwery: '',
	loading: false,
	loaded: false,
	error: null
}

		
// добавление в state новых  фотографий
const addLoadedPhotos = (state, photos, name) => {
	let arr;
	if(name === 'photosPhotographer') arr = state.photosPhotographer.slice();
	else arr = state.photos.slice(); 
	//объединяем массивы
	const newArray = arr.concat(photos);
	return newArray;
}

// изменение кол-ва лайков/дизлайков и статуса liked_by_user
const changeStatusLike = (state, idx, status) => {
	const arr = state.photos.slice();

	// находим индекс элемента, чей id === action.id
	const index = arr.findIndex(param => param.id === idx);

	arr[index].liked_by_user = !status;

	if(status) arr[index].likes -= 1;
	else arr[index].likes += 1;

	return arr;
}

const Reducer = (state = initialState, action) => {
	switch(action.type){

	    case 'LOAD_REQUESTED_ACTION':
	      	return {
		        ...state,
		        loading: true,
		        loaded: false
	      	};

		case 'LOAD_FAILURE_ACTION':
			return {
				...state,
				loading: false,
				loaded: true,
				error: action.payload
			};	

		case 'LOAD_PHOTOS_SUCCESS_ACTION':
			return {
				...state,
				photos: addLoadedPhotos(state, action.result, action.name),
				startLoad: action.end + 0,
				finishLoad: action.end + 30,
		        loading: false,
		        loaded: true,
		        error: null
			}

		case 'LOAD_PHOTOS_PHOTOGRAPHER_SUCCESS_ACTION':
			return{ 
				...state,
			photosPhotographer: addLoadedPhotos(state, action.result, action.name),
				// firstPhoto: action.end + 0,
				// lastPhoto: action.end + 30,
		        loading: false,
		        loaded: true,
		        error: null
			}	

		case 'LOAD_PROFILE_SUCCESS_ACTION':
			return{ 
				...state,
				profileUser: action.result,
		        loading: false,
		        loaded: true,
		        error: null
			}	

		case 'LOAD_PHOTOGRAPHER_SUCCESS_ACTION':
			return {
				...state,
				profilePhotographer: action.result,
				photosPhotographer: [],
				startLoad: 0,
				finishLoad: 30,
				firstPhoto: 0,
				lastPhoto: 30,
		        loading: false,
		        loaded: true,
		        error: null
			}

		case 'LOAD_DETAILS_SUCCESS_ACTION':
			return {
				...state,
				photoDetails: action.result,
		        loading: false,
		        loaded: true,
		        error: null
			}

		case 'LOAD_STATS_SUCCESS_ACTION':
			return {
				...state,
				totalStats: action.result,
		        loading: false,
		        loaded: true,
		        error: null
			}

		case 'LIKE_PHOTO_ACTION':
			return{ 
				...state,
				photos: changeStatusLike(state, action.id, action.status)
			};

		case 'DISLIKE_PHOTO_ACTION':
			return{ 
				...state,
				photos: changeStatusLike(state, action.id, action.status)
			};

		case 'LOG_OUT_ACTION':
			return{ 
				...state,
			};

		case 'LOG_IN_ACTION':
			return{ 
				...state,
			};

		case 'SELECT_VALUE_SORT_ACTION':
			return{ 
				...state,
				photos: [],
				startLoad: 0,
				finishLoad: 30,
				sorting: action.value
			};

		case 'INPUT_VALUE_SEARCH_ACTION':
			return{ 
				...state,
				searchQwery: action.value
			};

		default:
			return state;
	}
}

export default Reducer;