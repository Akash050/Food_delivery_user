import * as cartActionType from "../actionsType/cartActionType";

export default (state = {}, action) => {
    switch (action.type) {
        case cartActionType.GET_CART:
            return {
                ...state,
                cart: action.payload,
                isOpen: false
            };
        case cartActionType.HANDLE_CART:
            console.log("actio", action)
            return {
                ...state,
                isOpen: true
            };
        default:
            return state;
    }
};