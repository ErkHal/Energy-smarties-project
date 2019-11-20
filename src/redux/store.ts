import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { appListingsReducer } from './reducers/appListingsReducer';
import { composeWithDevTools } from 'remote-redux-devtools';
import { watchRequests } from './saga';
import { AppListingsState } from '../types';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

export interface AppState {
    appListingsState: AppListingsState
  }

export const store = createStore(
    combineReducers<AppState>({
      appListingsState: appListingsReducer
    }),
    composeEnhancers
  );

  sagaMiddleware.run(watchRequests);