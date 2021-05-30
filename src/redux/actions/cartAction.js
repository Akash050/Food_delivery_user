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

