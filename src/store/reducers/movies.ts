
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
    dataTopRated: new TopRatedMovies(),
    dataPopular: new PopularMovies(),
    dataNowPlaying: new NowPlayingMovies(),
    dataUpcoming: new UpComingMovies()
}

const movieReducer = (state = initialState, action=actionInitialState) => {
    switch (action.type) {
        case GET_TOP_RATED_MOVIES:
            return {...state, isLoading: false, topPickMovies: action.dataTopRated.results}
        case GET_POPULAR_MOVIES:
            return {...state, isLoading: false, popularMovies: action.dataPopular.results}
        case GET_NOW_PLAYING_MOVIES:
            return {...state, isLoading: false, nowPlayingMovies: action.dataNowPlaying.results}
        case GET_UPCOMING_MOVIES:
            return {...state, isLoading: false, upcomingMovies: action.dataUpcoming.results}
        default:
            return state;
    }
}

export default movieReducer;