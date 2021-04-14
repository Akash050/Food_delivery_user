import * as authApis from "../../services/auth";
import * as authActionType from "../actionsType/authActionType";

export const loginUser = (params) => async (dispatch) => {
  const response = await authApis.loginUser(params);
  if (response) {
    if (response.data.success) {
      localStorage.clear();
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("isLoggedIn", true);
      dispatch({
        type: authActionType.LOGIN_USER,
        payload: response.data,
      });
    }
    return response.data;
  }
  console.log('resp', response)
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

// export const deleteAdmin = (params) => async (dispatch) => {
//   const response = await authApis.deleteadmin(params);
//   dispatch({
//     type: authActionType.DELETE_ADMIN,
//     payload: response?.data?.data,
//   });
// };
