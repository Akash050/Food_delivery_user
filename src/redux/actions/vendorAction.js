import * as usersApi from "../../services/vendor";
import * as usersActionType from "../actionsType/vendorActionType";

// export const newUser = (params) => async (dispatch) => {
//   const response = await authApis.loginUser(params);
//   console.log('resp', response)
//   if (response) {
//     if (response.data.success) {
//       localStorage.clear();
//       localStorage.setItem("token", response.data.accessToken);
//       localStorage.setItem("isLoggedIn", true);
//       dispatch({
//         type: authActionType.LOGIN_USER,
//         payload: response.data,
//       });
//     }
//     return response.data;
//   }
//   return response

// };

export const allUser = (params) => async (dispatch) => {
  const response = await usersApi.allUsers(params);
  if (response.data.success) {
    dispatch({
      type: usersActionType.ALL_VENDOR,
      payload: response.data.data,
    });
  }
  return response.data;
};

export const userById = (params) => async (dispatch) => {
  const response = await usersApi.userById(params);
  //  console.log("rs ->", response.data.data)
  if (response.data.success) {
    dispatch({
      type: usersActionType.VENDOR_BY_ID,
      payload: response.data.data,
    });
  }
  return response.data;
};


export const deleteUser = (id) => async () => {
  const response = await usersApi.deleteUser(id);
  return response.data;
};

export const updateUser = (param) => async () => {
  const response = await usersApi.updateUser(param);
  return response.data;
};

export const verify = (param) => async () => {
  const response = await usersApi.verify(param);
  console.log("re s->", response)
  return response.data;
};

export const block = (param) => async () => {
  const response = await usersApi.block(param);
  console.log("re s->", response)
  return response.data;
};