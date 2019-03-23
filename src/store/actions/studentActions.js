import {GET_STUDENTS, DELETE_STUDENT, ADD_STUDENT, GET_STUDENT} from './type'
import axios from "axios"

// Terdapat 2 function yaitu get students dan dispatch
export const getStudents = () => async dispatch => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
        type: GET_STUDENTS,
        payload: response.data
    })
}

export const deleteStudent = id => async dispatch => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
        type: DELETE_STUDENT,
        payload: id
    })
}


export const addStudents = student => async dispatch => {
    const response =  await axios.post(`https://jsonplaceholder.typicode.com/users`, student);
    dispatch({
        type: ADD_STUDENT,
        payload: response.data
    })
}