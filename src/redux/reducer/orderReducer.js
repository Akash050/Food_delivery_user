import * as orderActionType from "../actionsType/orderActionType";

export default (state = {}, action) => {
    switch (action.type) {
        case orderActionType.ALL_ORDERS:
            return action.payload
        case orderActionType.ORDERS_BY_VENDOR_ID:
            return {
                ...state,
                vendorOrders:  action.payload
            };
        case orderActionType.USER_ORDERS:
            return {
                ...state,
                userOrders:  action.payload
            };
        case orderActionType.UPDATE_ORDER:
            return [...state, action.payload];
        case orderActionType.UPDATE_ORDER_STATUS:
            return [...state, action.payload];
        default:
            return state;
    }
};
