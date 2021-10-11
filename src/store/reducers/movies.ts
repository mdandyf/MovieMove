
import MoviesModel from '../../models/MoviesModel';
import { Action } from '../actions/index';
import { ActionType } from '../actiontype/index';

const initialState = {
    isLoadingTopPickMovies: true,
    topPickMovies: {},
    isLoadingPopularMovies: true,
    popularMovies: {},
    isLoadingNowPlayingMovies: true,
    nowPlayingMovies: {},
    isLoadingUpcomingMovies: true,
    upcomingMovies: {}
}

const movieReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_TOP_RATED_MOVIES:
            return {...state, isLoadingTopPickMovies: false, topPickMovies: action.payload}
        case ActionType.GET_POPULAR_MOVIES:
            return {...state, isLoadingPopularMovies: false, popularMovies: action.payload}
        case ActionType.GET_NOW_PLAYING_MOVIES:
            return {...state, isLoadingNowPlayingMovies: false, nowPlayingMovies: action.payload}
        case ActionType.GET_UPCOMING_MOVIES:
            return {...state, isLoadingUpcomingMovies: false, upcomingMovies: action.payload}
        default:
            return state;
    }
}

export default movieReducer;