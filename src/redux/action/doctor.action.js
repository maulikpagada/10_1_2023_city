import * as ActionTypes from "../ActionTypes"

export const getdoctor = () => (dispatch) => {
    console.log(dispatch);
    try {
        fetch('http://localhost:3004/doctor')
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.DOCTOR_GET, payload: data }));
    } catch (error) {

    }
}