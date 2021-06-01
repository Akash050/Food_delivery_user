import * as menuItemActionType from "../actionsType/menuItemActionType";

export default (state = [], action) => {
    switch (action.type) {
        case menuItemActionType.NEW_MENU_ITEM:
            console.log("NEW_PRODUCT_CATEGORY", action.payload);
            return [...state, action.payload];
        case menuItemActionType.ALL_MENU_ITEM:
            return [
                ...action.payload
            ];
        case menuItemActionType.MENU_ITEM_BY_CAT:
            // let temp = [...action.payload.body]
            console.log("temp ->>", action.payload)
            return [
                action.payload
            ];
        case menuItemActionType.MENU_ITEM_BY_SUBCAT:
            // let temp = [...action.payload.body]
            console.log("temp ->>", action.payload)
            return action.payload;
        case menuItemActionType.MENU_ITEM_BY_VENDOR:
            // let temp = [...action.payload.body]
            console.log("temp ->>", action.payload)
            return action.payload;
        case menuItemActionType.UPDATE_MENU_ITEM:
            return [...state, action.payload];
        case menuItemActionType.DELETE_MENU_ITEM:
            console.log("temp ->>", action.payload)
            return [...state.filter((item, index) => item.id !== action.payload)];
        default:
            return state;
    }
};
