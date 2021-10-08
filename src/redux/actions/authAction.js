import * as authApis from "../../services/auth";
import * as authActionType from "../actionsType/authActionType";

export const loginUser = (params) => async (dispatch) => {
  const response = await authApis.loginUser(params);
  console.log('resp', response)
  if (response) {
    if (response.data.success) {
      localStorage.clear();
      localStorage.setItem("token", response.data.data.accessToken);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("id", response.data.data.id);
      dispatch({
        type: authActionType.LOGIN_USER,
        payload: response.data,
      });
    }
    return response.data;
  }
  return response

};

export const registerUser = (params) => async (dispatch) => {
  const response = await authApis.registerUser(params);
  if (response.success) {
    console.log('in if')
    dispatch({
      type: authActionType.REGISTER_USER,
      payload: response.data,
    });
  }
  return response.data;
};

export const forgetPassword = (params) => async (dispatch) => {
  const response = await authApis.forgetPassword(params);
  if (response && response.success) {
    console.log('forget pass', params)
    dispatch({
      type: authActionType.FORGET_PASSWORD,
      payload: response.data,
    });
  }
  return response.data;
};
export const resetPassword = (params) => async (dispatch) => {
  const response = await authApis.resetPassword(params);
  if (response.success) {
    console.log('forget pass', params)
    dispatch({
      type: authActionType.RESET_PASSWORD,
      payload: response.data,
    });
  }
  return response.data;
};

// export const deleteAdmin = (params) => async (dispatch) => {
//   const response = await authApis.deleteadmin(params);
//   dispatch({
//     type: authActionType.DELETE_ADMIN,
//     payload: response?.data?.data,
//   });
// };
