import * as ActionTypes from "../ActionTypes"

const initialState = {
    isLoading: false,
    medicine: [],
    error: null,
}


export const medicineReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case ActionTypes.MEDICIN_GET:
            return {
                ...state,
                medicine: action.payload
            }

        default:
            return state
    }
}