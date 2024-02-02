// import axios from 'axios';

// // Action creators
// export const signupSuccess = (user) => {
//   return {
//     type: 'SIGNUP_SUCCESS',
//     payload: user,
//   };
// };

// export const signupError = (error) => {
//   return {
//     type: 'SIGNUP_ERROR',
//     payload: error,
//   };
// };

// export const loginSuccess = (user) => {
//   return {
//     type: 'LOGIN_SUCCESS',
//     payload: user,
//   };
// };

// export const loginError = (error) => {
//   return {
//     type: 'LOGIN_ERROR',
//     payload: error,
//   };
// };

// // Async action for user registration
// export const signup = (userData) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post('https://staging-api.erpxbd.com/api/v1/users/signup', userData);
//       dispatch(signupSuccess(response.data));
//     } catch (error) {
//       dispatch(signupError(error.response.data.message));
//     }
//   };
// };

// // Async action for user login
// export const login = (loginData) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post('https://staging-api.erpxbd.com/api/v1/users/login', loginData);
//       dispatch(loginSuccess(response.data));
//     } catch (error) {
//       dispatch(loginError(error.response.data.message));
//     }
//   };
// };
