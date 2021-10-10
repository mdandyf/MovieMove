import Constant from '../../constants/constant';

export const GET_TOP_RATED_MOVIES = 'GET_TOP_RATED_MOVIES';

export const getTopRatedMovies = () => {
    return async dispatch => {
        try {
            const response = await fetch(Constant.API_MOVIES + "/top_rated?" + "api_keys" + Constant.API_KEYS + "&language=" + Constant.LANGUAGE + "&page" + Constant.PAGE );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            console.log(resData)

            dispatch({type: GET_TOP_RATED_MOVIES, data:resData});
        } catch(err) {
            throw err
        }
    };
};

export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';

export const getPopularMovies = () => {
    return async dispatch => {
        try {
            const response = await fetch(Constant.API_MOVIES + "/popular?" + "api_keys" + Constant.API_KEYS + "&language=" + Constant.LANGUAGE + "&page" + Constant.PAGE );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            console.log(resData)

            dispatch({type: GET_POPULAR_MOVIES, data:resData});
        } catch(err) {
            throw err
        }
    };
}

export const GET_NOW_PLAYING_MOVIES = 'GET_NOW_PLAYING_MOVIES';

export const getNowPlayingMovies = () => {
    return async dispatch => {
        try {
            const response = await fetch(Constant.API_MOVIES + "/now_playing?" + "api_keys" + Constant.API_KEYS + "&language=" + Constant.LANGUAGE + "&page" + Constant.PAGE );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            console.log(resData)

            dispatch({type: GET_NOW_PLAYING_MOVIES, data:resData});
        } catch(err) {
            throw err
        }
    };
}

export const GET_UPCOMING_MOVIES = 'GET_UPCOMING_MOVIES';

export const getUpcomingMovies = () => {
    return async dispatch => {
        try {
            const response = await fetch(Constant.API_MOVIES + "/upcoming?" + "api_keys" + Constant.API_KEYS + "&language=" + Constant.LANGUAGE + "&page" + Constant.PAGE );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            console.log(resData)

            dispatch({type: GET_UPCOMING_MOVIES, data:resData});
        } catch(err) {
            throw err
        }
    };
}