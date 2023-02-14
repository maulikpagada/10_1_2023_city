import { combineReducers } from "redux";
import { counterRedux } from "./counter.reducer";


export const rootReducer = combineReducers({
    count:counterRedux
})