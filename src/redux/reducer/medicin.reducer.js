import * as ActionTypes from "../ActionTypes"

const initialState = {
    isLoading: false,
    medicine: [],
    error: null,
}


export const medicineReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionTypes.MEDICIN_GET:
            return {
                ...state,
                medicine: action.payload
            }
        case ActionTypes.MEDICIN_ADD:
            return{
                ...state,
                medicine:state.medicine.concat(action.payload)
            }

        case ActionTypes.MEDICIN_UPDATE:
            let uData = state.medicine.map((a) => {
                if (a.id === action.payload.id) {
                    return action.payload
                } else {
                    return a;
                }
            })
            return{
                ...state,
                medicine: uData
            }

        case ActionTypes.MEDICIN_DELETE:
            let dData =  state.medicine.filter((m) => m.id !== action.payload)

            return{
                ...state,
                medicine: dData
            }
        default:
            return state
    }
}