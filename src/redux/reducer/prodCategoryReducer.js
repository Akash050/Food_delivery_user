import * as prodCategoryActionType from "../actionsType/prodCategoryActionType";

export default (state = [], action) => {
    switch (action.type) {
        case prodCategoryActionType.NEW_PRODUCT_CATEGORY:
            console.log("NEW_PRODUCT_CATEGORY", action.payload);
            return [...state, action.payload];
        case prodCategoryActionType.ALL_PRODUCT_CATEGORY:
            return [
                ...action.payload
            ];
        case prodCategoryActionType.PRODUCT_CATEGORY_BY_ID:
            // let temp = [...action.payload.body]
            console.log("temp ->>", action.payload)
            return [
                action.payload
            ];
        case prodCategoryActionType.UPDATE_PRODUCT_CATEGORY:
            return [...state, action.payload];
        case prodCategoryActionType.DELETE_PRODUCT_CATEGORY:
            console.log("temp ->>", action.payload)
            return [...state.filter((item, index) => item.id !== action.payload)];
        default:
            return state;
    }
};
