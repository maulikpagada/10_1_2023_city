import * as ActionTypes from "../ActionTypes"
    
export const getmedicin = () => (dispatch) => {
    console.log("action");
    try {
        fetch('http://localhost:3004/medicin')
            .then((response) => response.json())
            .then((data) => dispatch({type: ActionTypes.MEDICIN_GET, payload:data}));
            
    } catch (error) {

    }
}