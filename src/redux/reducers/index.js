import { combineReducers } from "redux";
import { shopReducer } from "./productReducer";
const reducers = combineReducers({
    shop:shopReducer,
});

export default reducers;