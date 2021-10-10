
import {
    GET_TOP_RATED_MOVIES,
    GET_POPULAR_MOVIES,
    GET_NOW_PLAYING_MOVIES,
    GET_UPCOMING_MOVIES,
} from '../actions/movies';

import TopRatedMovies from '../../models/TopRatedMoviesModel';
import PopularMovies from '../../models/PopularMoviesModel';
import NowPlayingMovies from '../../models/NowPlayingMoviesModel';
import UpComingMovies from '../../models/UpcomingMovieModel';

const initialState = {
    isLoading: true,
    topPickMovies: [],
    popularMovies: [],
    nowPlayingMovies: [],
    upcomingMovies: [],
}

const actionInitialState = {
    type: "",
    data: []
}

const movieReducer = (state = initialState, action=actionInitialState) => {
    switch (action.type) {
        case GET_TOP_RATED_MOVIES:
            return {...state, isLoading: false, topPickMovies: action.data}
        case GET_POPULAR_MOVIES:
            return {...state, isLoading: false, popularMovies: action.data}
        case GET_NOW_PLAYING_MOVIES:
            return {...state, isLoading: false, nowPlayingMovies: action.data}
        case GET_UPCOMING_MOVIES:
            return {...state, isLoading: false, upcomingMovies: action.data}
        default:
            return state;
    }
}

export default movieReducer;