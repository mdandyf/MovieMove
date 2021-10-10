import { Dispatch } from 'redux';
import { ActionType } from '../actiontype';
import { Action } from '../actions';
import Constant from '../../constants/constant';

export const getTopRatedMovies = () => {
    return async (dispatch:Dispatch<Action>) => {
        try {
            const URL = Constant.API_MOVIES + "/top_rated?" + "api_key=" + Constant.API_KEYS + "&language=" + Constant.LANGUAGE + "&page" + Constant.PAGE
            const response = await fetch( URL );
            
            if (!response.ok) {
                throw new Error('Something went wrong! ' + URL);
            }

            const resData = await response.json();
            

            dispatch({type: ActionType.GET_TOP_RATED_MOVIES, payload:resData});
        } catch(err) {
            throw err
        }
    };
};

export const getPopularMovies = () => {
    return async (dispatch:Dispatch<Action>) => {
        try {
            const response = await fetch(Constant.API_MOVIES + "/popular?" + "api_key=" + Constant.API_KEYS + "&language=" + Constant.LANGUAGE + "&page" + Constant.PAGE );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            

            dispatch({type: ActionType.GET_POPULAR_MOVIES, payload:resData});
        } catch(err) {
            throw err
        }
    };
}

export const getNowPlayingMovies = () => {
    return async (dispatch:Dispatch<Action>) => {
        try {
            const response = await fetch(Constant.API_MOVIES + "/now_playing?" + "api_key=" + Constant.API_KEYS + "&language=" + Constant.LANGUAGE + "&page" + Constant.PAGE );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            

            dispatch({type: ActionType.GET_NOW_PLAYING_MOVIES, payload:resData});
        } catch(err) {
            throw err
        }
    };
}

export const getUpcomingMovies = () => {
    return async (dispatch:Dispatch<Action>) => {
        try {
            const response = await fetch(Constant.API_MOVIES + "/upcoming?" + "api_key=" + Constant.API_KEYS + "&language=" + Constant.LANGUAGE + "&page" + Constant.PAGE );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            

            dispatch({type: ActionType.GET_UPCOMING_MOVIES, payload:resData});
        } catch(err) {
            throw err
        }
    };
}

export const getTopRatedTvShows = () => {
    return async (dispatch:Dispatch) => {
        try {
            const response = await fetch(Constant.API_TVSHOWS + "/top_rated?" + "api_key=" + Constant.API_KEYS + "&language=" + Constant.LANGUAGE + "&page" + Constant.PAGE );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            

            dispatch({type:  ActionType.GET_TOP_RATED_TVSHOWS, payload:resData});
        } catch(err) {
            throw err
        }
    };
}

export const getPopularTvShows = () => {
    return async (dispatch:Dispatch) => {
        try {
            const response = await fetch(Constant.API_TVSHOWS + "/popular?" + "api_key=" + Constant.API_KEYS + "&language=" + Constant.LANGUAGE + "&page" + Constant.PAGE );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            

            dispatch({type: ActionType.GET_POPULAR_TVSHOWS, payload:resData});
        } catch(err) {
            throw err
        }
    };
}

export const getOnTheAirTvShows = () => {
    return async (dispatch:Dispatch) => {
        try {
            const response = await fetch(Constant.API_TVSHOWS + "/on_the_air?" + "api_key=" + Constant.API_KEYS + "&language=" + Constant.LANGUAGE + "&page" + Constant.PAGE );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            

            dispatch({type: ActionType.GET_ON_THE_AIR_TV_SHOWS, payload:resData});
        } catch(err) {
            throw err
        }
    };
}