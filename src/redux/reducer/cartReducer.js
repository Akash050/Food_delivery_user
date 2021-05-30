import * as cartActionType from "../actionsType/cartActionType";

export default (state = {}, action) => {
    switch (action.type) {
        case cartActionType.GET_CART:
            return {
                ...state,
                cart: action.payload,
              };
        default:
            return state;
    }
};