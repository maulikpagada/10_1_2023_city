import * as ActionTypes from "../ActionTypes"

export const getmedicin = () => (dispatch) => {
    console.log("action");
    try {
        fetch('http://localhost:3004/medicin')
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.MEDICIN_GET, payload: data }));
    } catch (error) {

    }
}

export const postmedicin = (data1) => (dispatch) => {
    try {
        fetch('http://localhost:3004/medicin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.MEDICIN_ADD, payload: data }))
    } catch (error) {

    }
}

export const putmedicin = (data) => (dispatch) => {
    try {
        fetch('http://localhost:3004/medicin/' + data.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.MEDICIN_ADD, payload: data }))
    } catch (error) {

    }
}

export const deletemedicin = (id) => (dispatch) => {
    try {
        fetch('http://localhost:3004/medicin/' + id , {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then(dispatch({ type: ActionTypes.MEDICIN_DELETE, payload: id }))
    } catch (error) {

    }
}