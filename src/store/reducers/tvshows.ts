import {
    GET_TOP_RATED_TV_SHOWS,
    GET_POPULAR_TV_SHOWS,
} from '../actions/tvshows';

const initialState = {
    isLoading: true,
    topRatedTvShows: [],
    popularTvShows: [],
}

const actionInitialState = {
    type: "",
    data: []
}

const tvshowReducer = (state = initialState, action=actionInitialState) => {
    switch (action.type) {
        case GET_TOP_RATED_TV_SHOWS:
            return {...state, isLoading: false, topRatedTvShows: action.data}
        case GET_POPULAR_TV_SHOWS:
            return {...state, isLoading: false, popularTvShows: action.data}
        default:
            return state;
    }
}

export default tvshowReducer;