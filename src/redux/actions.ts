import { SORTING_TYPE } from "../types";

export enum ACTIONS {
    GET_DEFAULT = 'GET_DEFAULT',
    SEARCH_APPS = 'SEARCH_APPS',
    FETCH_APPS_SUCCESS = 'FETCH_SEARCH_SUCCESS',
    FETCH_APPS_FAILED = 'FETCH_SEARCH_FAILED',
    STORE_SEARCH_PARAMS = 'STORE_SEARCH_PARAMS',
    FETCHING_APPS = 'FETCHING_APPS',
    REFRESH_APPS = 'REFRESH_APPS'
}

export interface SearchAppAction {
    type: ACTIONS
    searchWord: string,
    sortBy: SORTING_TYPE
}