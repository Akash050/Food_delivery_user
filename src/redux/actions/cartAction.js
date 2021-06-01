import * as cartApi from "../../services/cart";
import * as cartActionType from "../actionsType/cartActionType";



export const cartByUser = (params) => async (dispatch) => {
    const response = await cartApi.cartByUser(params);
    if (response.data.success) {
        dispatch({
            type: cartActionType.GET_CART,
            payload: response.data.data,
        });
    }
    return response.data;
};

export const updateCart = (params) => async (dispatch) => {
    const response = await cartApi.updateCart(params);
    return response.data;
};

export const removeCart = (params) => async (id) => {
    const response = await cartApi.removeCart(params);
    return response.data;
};

export const handleCart = (value) =>  (dispatch) => {
    console.log("acnt val ", value)
    dispatch({
        type: cartActionType.HANDLE_CART,
        payload: value,
    });
};
