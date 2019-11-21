import { ACTIONS, SearchAppAction } from "./actions";
import { takeLatest, all, call } from "@redux-saga/core/effects";
import ApiClient from "../services/apiClient";

const api = new ApiClient();

export function* watchRequests() {
  yield all([
    takeLatest(ACTIONS.GET_DEFAULT, fetchDefaultApps),
    takeLatest(ACTIONS.SEARCH_APPS, searchApps)
  ]);
}

function* fetchDefaultApps() {
    const results = yield call(api.fetchApps);
}

function* searchApps(action: SearchAppAction) {
  console.log(action.searchWord)
  console.log(action.sortBy)
  const results = yield call(api.fetchSearchedApps);
}