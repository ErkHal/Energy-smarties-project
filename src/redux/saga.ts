import { ACTIONS, SearchAppAction } from "./actions";
import { takeLatest, all, call, put } from "@redux-saga/core/effects";
import ApiClient from "../services/apiClient";
import { SORTING_TYPE } from "../types";

const api = new ApiClient();

export function* watchRequests() {
  yield all([
    takeLatest(ACTIONS.GET_DEFAULT, fetchDefaultApps),
    takeLatest(ACTIONS.SEARCH_APPS, searchApps)
  ]);
}

function* fetchDefaultApps() {
  yield put({ type: ACTIONS.STORE_SEARCH_PARAMS, value: { searchWord: '', sortedBy: SORTING_TYPE.TOTAL_SCORE }})
  yield put({ type: ACTIONS.FETCHING_APPS })
  try {
    const results = yield call(api.fetchApps);
    yield put({ type: ACTIONS.FETCH_APPS_SUCCESS, value: results });
  } catch (error) {
    yield put({ type: ACTIONS.FETCH_APPS_FAILED, value: error });
  }
}

function* searchApps(action: SearchAppAction) {
  yield put({ type: ACTIONS.STORE_SEARCH_PARAMS, value: { searchWord: action.searchWord, sortedBy: action.sortBy }})
  yield put({ type: ACTIONS.FETCHING_APPS })
  try {
    const results = yield call(api.fetchSearchedApps, action.searchWord, action.sortBy);
    yield put({ type: ACTIONS.FETCH_APPS_SUCCESS, value: results });
  } catch (error) {
    yield put({ type: ACTIONS.FETCH_APPS_FAILED, value: error });
  }
}