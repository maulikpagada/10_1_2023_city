import { combineReducers } from "redux";
import { counterRedux } from "./counter.reducer";
import { doctorReducer } from "./doctor.reducer";
import {  medicineReducer } from "./medicin.reducer";


export const rootReducer = combineReducers({
    count:counterRedux,
    medicine: medicineReducer,
    // doctor: doctorReducer
})