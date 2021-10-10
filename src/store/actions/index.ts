import MoviesModel from '../../models/MoviesModel';
import TVShowsModel from '../../models/TvShowsModel';
import { ActionType } from '../actiontype/index';

interface TopRatedAction {
    type: ActionType.GET_TOP_RATED_MOVIES,
    payload: MoviesModel
}

interface PopularAction {
    type: ActionType.GET_POPULAR_MOVIES,
    payload: MoviesModel
}

interface NowPlayingAction {
    type: ActionType.GET_NOW_PLAYING_MOVIES,
    payload: MoviesModel
}

interface UpcomingAction {
    type: ActionType.GET_UPCOMING_MOVIES,
    payload: MoviesModel
}

interface TopRatedTVAction {
    type: ActionType.GET_TOP_RATED_TVSHOWS,
    payload: TVShowsModel
}

interface PopularTVAction {
    type: ActionType.GET_POPULAR_TVSHOWS,
    payload: TVShowsModel
}

interface OTATVAction {
    type: ActionType.GET_ON_THE_AIR_TV_SHOWS,
    payload: TVShowsModel
}

export type Action = TopRatedAction | PopularAction | NowPlayingAction | UpcomingAction | TopRatedTVAction | PopularTVAction | OTATVAction