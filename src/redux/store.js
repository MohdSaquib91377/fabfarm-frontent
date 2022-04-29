import { createStore } from 'redux';
import reducers from './reducers/index';
import { persistStore } from 'redux-persist';

const persistedReducer = reducers
const store = createStore(persistedReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store)
export default store;