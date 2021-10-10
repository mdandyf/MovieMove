import { combineReducers } from 'redux';

import movieReducer from './movies';
import tvshowReducer from './tvshows';
import peopleReducer from './people';

const reducer = combineReducers({
    movies: movieReducer,
    tvshows: tvshowReducer,
    people: peopleReducer,
});

export default reducer;

export type State = ReturnType<typeof reducer>
