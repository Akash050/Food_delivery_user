import * as userApi from "../../services/user";
import * as userActionType from "../actionsType/userActionType";


export const getUser = (params) => async (dispatch) => {
    const response = await userApi.getUser(params);
    // if (response.data.success) {
    //     dispatch({
    //         type: userActionType.GET_USER,
    //         payload: response.data.data
    //     });
    // }
    return response;
};


