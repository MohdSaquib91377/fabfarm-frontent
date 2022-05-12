import { combineReducers } from "redux";
import { shopReducer } from "./productReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const productsPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['products,currentItem,signinOpen,signupOpen']
}
const reducers = combineReducers({
    shop: persistReducer(productsPersistConfig, shopReducer),
});

export default reducers;