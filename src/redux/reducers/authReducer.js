// const initState = {
//     authError: null,
//   };
  
//   const authReducer = (state = initState, action) => {
//     switch (action.type) {
//       case 'SIGNUP_SUCCESS':
//         console.log('Signup success:', action.payload);
//         return {
//           ...state,
//           authError: null,
//         };
//       case 'SIGNUP_ERROR':
//         console.log('Signup error:', action.payload);
//         return {
//           ...state,
//           authError: action.payload,
//         };
//       case 'LOGIN_SUCCESS':
//         console.log('Login success:', action.payload);
//         return {
//           ...state,
//           authError: null,
//         };
//       case 'LOGIN_ERROR':
//         console.log('Login error:', action.payload);
//         return {
//           ...state,
//           authError: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default authReducer;
  