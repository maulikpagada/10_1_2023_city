import * as ActionTypes from "../ActionTypes"

const initialState = {
    isLoading: false,
    doctor: [],
    error: null,   
}


export const doctorReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.DOCTOR_GET:
            return{
                ...state,
                doctor:action.payload
            }
    }
}