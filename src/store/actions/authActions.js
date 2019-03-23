import { AUTH_LOGIN, AUTH_LOGOUT, } from './type';
import axios from 'axios';

// export const checkAuth = () => async dispatch => {
//   dispatch({
//     type: AUTH_GET
//   })
// }

export const loginUser = (user) => async dispatch => {
  try {
    const ex_link = 'https://cors-anywhere.herokuapp.com/';
    const response = await axios.post(ex_link + 'https://node-student.herokuapp.com/api/student/signin', user);
    localStorage.setItem("token", response.data.token);
    dispatch({
      type: AUTH_LOGIN,
      payload: response.data.token
    });
    return true;

  } catch (error) {
    console.log({error});
    alert('Username atau password salah');
    return false;
  }
}

export const userLogout = () => async dispatch => {
  dispatch({
    type: AUTH_LOGOUT
  });
}