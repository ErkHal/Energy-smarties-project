import { combineReducers } from 'redux';
import { AppListingsState } from '../../types';
import { ACTIONS } from '../actions';
import { dummyApps } from '../../dummyApps';

const INITIAL_STATE: AppListingsState = {
    applications: dummyApps,
    searchWord: null,
    sortedBy: null
}

export const appListingsReducer = (state: AppListingsState, action) => {
    if (state === undefined) {
        return INITIAL_STATE;
    }
    switch (action.type) {

        case ACTIONS.GET_DEFAULT: {
            state.applications = action.value
        }
        default:
            return state
    }
}

export default combineReducers({
    appListings: appListingsReducer
});