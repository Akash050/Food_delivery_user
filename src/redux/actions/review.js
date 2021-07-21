import * as reviewApi from "../../services/review";
import * as reviewActionType from "../actionsType/reviewActionType";

export const addReview = (params) => async (dispatch) => {
    const response = await reviewApi.addReview(params);
    return response.data;
};

// export const updateCart = (params) => async (dispatch) => {
//     const response = await cartApi.updateCart(params);
//     return response.data;
// };

// export const removeCart = (params) => async (id) => {
//     const response = await cartApi.removeCart(params);
//     return response.data;
// };
