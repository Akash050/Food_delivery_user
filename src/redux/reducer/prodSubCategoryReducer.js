import * as prodSubCatActionType from "../actionsType/prodSubCatActionType";

export default (state = [], action) => {
    switch (action.type) {
        case prodSubCatActionType.NEW_PRODUCT_SUB_CATEGORY:
            console.log("NEW_PRODUCT_SUB_CATEGORY", action.payload);
            return [...state, action.payload];
        case prodSubCatActionType.ALL_PRODUCT_SUB_CATEGORY:
            return action.payload

        case prodSubCatActionType.PRODUCT_SUB_CATEGORY_BY_ID:
            // let temp = [...action.payload.body]
            console.log("temp ->>", action.payload)
            return action.payload;
        case prodSubCatActionType.PRODUCT_SUB_CATEGORY_BY_CATEGORY_ID:
            // let temp = [...action.payload.body]
            console.log("temp ->>", action.payload)
            return action.payload;
        case prodSubCatActionType.UPDATE_PRODUCT_SUB_CATEGORY:
            return [...state, action.payload];
        case prodSubCatActionType.DELETE_PRODUCT_SUB_CATEGORY:
            console.log("temp ->>", action.payload)
            return [...state.filter((item, index) => item._id !== action.payload)];
        default:
            return state;
    }
};
