import { combineReducers } from 'redux';
import movieReducer from '../reducers/movies';
import tvshowReducer from '../reducers/tvshows';

const reducer = combineReducers({
    movies: movieReducer,
    tvshows: tvshowReducer,
});

export default reducer;

export type State = ReturnType<typeof reducer>
