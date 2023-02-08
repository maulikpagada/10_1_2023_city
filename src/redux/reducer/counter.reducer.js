import * as ActionTypes from "../ActionTypes"

const initialState = {
    count: 0
}

export const counterRedux = (store = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT_COUNTER:
            return {
                count: state.count + 1
            }

        case ActionTypes.DECREMENT_COUNTER:
            return {
                count: state.count - 1
            }

        default:
            return state
    }
}   