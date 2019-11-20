import { SORTING_TYPE } from "../types";

export enum ACTIONS {
    GET_DEFAULT = 'GET_DEFAULT',
    SEARCH_APPS = 'SEARCH_APPS'
}

export interface SearchAppAction {
    type: ACTIONS
    searchWord: string,
    sortBy: SORTING_TYPE
}