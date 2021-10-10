import { Action } from '../actions/index';
import { ActionType } from '../actiontype/index';

const initialState = {
    isLoadingPopularPeople: true,
    popularPeople:{},
}

const peopleReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_POPULAR_PEOPLE:
            return {...state, isLoadingPopularPeople: false, popularPeople: action.payload}
        default:
            return state;
    }
}

export default peopleReducer;