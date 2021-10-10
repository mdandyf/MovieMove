import Constant from '../../constants/constant';

export const GET_TOP_RATED_TV_SHOWS = 'GET_TOP_RATED_TV_SHOWS';

export const getTopRatedTvShows = () => {
    return async dispatch => {
        try {
            const response = await fetch(Constant.API_TVSHOWS + "/top_rated?" + "api_keys" + Constant.API_KEYS + "&language=" + Constant.LANGUAGE + "&page" + Constant.PAGE );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            console.log(resData)

            dispatch({type: GET_TOP_RATED_TV_SHOWS, dataTopRated:resData});
        } catch(err) {
            throw err
        }
    };
}

export const GET_POPULAR_TV_SHOWS = 'GET_POPULAR_TV_SHOWS';

export const getPopularTvShows = () => {
    return async dispatch => {
        try {
            const response = await fetch(Constant.API_TVSHOWS + "/popular?" + "api_keys" + Constant.API_KEYS + "&language=" + Constant.LANGUAGE + "&page" + Constant.PAGE );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            console.log(resData)

            dispatch({type: GET_POPULAR_TV_SHOWS, dataPopular:resData});
        } catch(err) {
            throw err
        }
    };
}

export const GET_ON_THE_AIR_TV_SHOWS = 'GET_ON_THE_AIR_TV_SHOWS';

export const getOnTheAirTvShows = () => {
    return async dispatch => {
        try {
            const response = await fetch(Constant.API_TVSHOWS + "/on_the_air?" + "api_keys" + Constant.API_KEYS + "&language=" + Constant.LANGUAGE + "&page" + Constant.PAGE );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            console.log(resData)

            dispatch({type: GET_ON_THE_AIR_TV_SHOWS, dataPopular:resData});
        } catch(err) {
            throw err
        }
    };
}