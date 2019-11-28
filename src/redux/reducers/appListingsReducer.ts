import { combineReducers } from 'redux';
import { AppListingsState } from '../../types';
import { ACTIONS } from '../actions';
import { dummyApps } from '../../dummyApps';

const INITIAL_STATE: AppListingsState = {
    applications: dummyApps,
    searchWord: null,
    sortedBy: null,
    loading: true,
    failed: true
}

export const appListingsReducer = (state: AppListingsState, action) => {
    if (state === undefined) {
        return INITIAL_STATE;
    }
    switch (action.type) {

        case ACTIONS.FETCHING_APPS: {
            return {
                ...state,
                loading: true
            }
        }
        
        case ACTIONS.STORE_SEARCH_PARAMS: {
            return {
                ...state,
                searchWord: action.value.searchWord,
                sortedBy: action.value.sortedBy
            }
        }

        case ACTIONS.FETCH_APPS_SUCCESS: {
            return {
                ...state,
                loading: false,
                failed: false,
                applications: action.value
            }
        }

        case ACTIONS.FETCH_APPS_FAILED: {
            return {
                ...state,
                loading: false,
                failed: true
            }
        }

        default:
            return state
    }
}

export default combineReducers({
    appListings: appListingsReducer
});