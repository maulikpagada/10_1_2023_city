import { combineReducers } from "redux";
// import { getmedicin } from "../action/medicin.action";
import { counterRedux } from "./counter.reducer";
import {  medicineReducer } from "./medicin.reducer";


export const rootReducer = combineReducers({
    count:counterRedux,
    medicine: medicineReducer
})