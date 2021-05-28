import * as cartActionType from "../actionsType/cartActionType";

export default (state = [], action) => {
    switch (action.type) {
        case cartActionType.ADD_CART:
            console.log('ooo', action.payload)
            return action.payload
        case cartActionType.REMOVE_CART:
            return action.payload

        default:
            return state;
    }
};