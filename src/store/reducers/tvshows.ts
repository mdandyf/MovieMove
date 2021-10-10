import OnTheAirTVShowsModel from '../../models/OnTheAirTvShowsModel';
import PopularTVShowsModel from '../../models/PopularTVShowsModel';
import TopRatedTVShowsModel from '../../models/TopRatedTVShowsModel';
import {
    GET_TOP_RATED_TV_SHOWS,
    GET_POPULAR_TV_SHOWS,
    GET_ON_THE_AIR_TV_SHOWS,
} from '../actions/tvshows';

const initialState = {
    isLoading: true,
    topRatedTvShows: [],
    popularTvShows: [],
    otaTvShows: []
}

const actionInitialState = {
    type: "",
    dataTopRated: new TopRatedTVShowsModel(),
    dataPopular: new PopularTVShowsModel(),
    dataOta: new OnTheAirTVShowsModel(),
}

const tvshowReducer = (state = initialState, action=actionInitialState) => {
    switch (action.type) {
        case GET_TOP_RATED_TV_SHOWS:
            return {...state, isLoading: false, topRatedTvShows: action.dataTopRated.results}
        case GET_POPULAR_TV_SHOWS:
            return {...state, isLoading: false, popularTvShows: action.dataPopular.results}
        case GET_ON_THE_AIR_TV_SHOWS:
            return {...state, isLoading: false, otaTvShows: action.dataOta.results}
        default:
            return state;
    }
}

export default tvshowReducer;