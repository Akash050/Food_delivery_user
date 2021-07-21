import * as userApi from "../../services/user";
import * as userActionType from "../actionsType/userActionType";


export const getUser = (params) => async (dispatch) => {
    const response = await userApi.getUser(params);
    if (response.data.success) {
        dispatch({
            type: userActionType.GET_USER,
            payload: response.data.data
        });
    }
    return response;
};


export const updateUser = (params) => async (dispatch) => {
    const response = await userApi.updateUser(params);
    return response.data;
};

export const updatePassword = (params) => async (dispatch) => {
    const response = await userApi.updatePass(params);
    return response.data;
};


export const updateEmail = (params) => async (dispatch) => {
    const response = await userApi.updateEmail(params);
    return response.data;
};

export const contact = (params) => async (dispatch) => {
    const response = await userApi.contact(params);
    return response.data;
};