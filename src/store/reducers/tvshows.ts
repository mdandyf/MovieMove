import { Action } from '../actions/index';
import { ActionType } from '../actiontype/index';

const initialState = {
    isLoadingTopRatedTvShows: true,
    topRatedTvShows:{},
    isLoadingPopularTvShows: true,
    popularTvShows:{},
    isLoadingOtaTvShows: true,
    otaTvShows:{}
}

const tvshowReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_TOP_RATED_TVSHOWS:
            return {...state, isLoadingTopRatedTvShows: false, topRatedTvShows: action.payload}
        case ActionType.GET_POPULAR_TVSHOWS:
            return {...state, isLoadingPopularTvShows: false, popularTvShows: action.payload}
        case ActionType.GET_ON_THE_AIR_TV_SHOWS:
            return {...state, isLoadingOtaTvShows: false, otaTvShows: action.payload}
        default:
            return state;
    }
}

export default tvshowReducer;