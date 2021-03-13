import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { persistStore } from 'redux-persist' // To Store data in localStorage
// import rootReducer from './root-reducer'
import persistedReducer from './root-reducer'
// import thunk from 'redux-thunk' // 1.Remove 
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root.saga'

//2. remove Thunk
// const middlewares = [logger, thunk];

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

export const store = createStore(persistedReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);