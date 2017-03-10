import { createStore, applyMiddleware, combineReducers } from 'redux';
import { router5Middleware, router5Reducer } from 'redux-router5';
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger';
import router from './router'
import cities from 'data/cities'
import layout from 'data/layout'

const reducers = {
  router: router5Reducer,
  [cities.key]: cities.reducer,
  [layout.key]: layout.reducer
}

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const createStoreWithMiddleware = applyMiddleware(apiMiddleware, router5Middleware(router))(createStore);
const store = createStoreWithMiddleware(combineReducers(reducers), devTools);

router.setDependencies({ store })

window.store = store;

export default store;
