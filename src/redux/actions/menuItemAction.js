import * as menuItemApi from "../../services/menuItem";
import * as menuItemActionType from "../actionsType/menuItemActionType";

export const newMenuItem = (params) => async (dispatch) => {
    const response = await menuItemApi.addMenuItem(params);
    if (response.data.success) {
        dispatch({
            type: menuItemActionType.NEW_MENU_ITEM,
            payload: response.data.data,
        });
    }
    return response.data;
};
export const allMenuItem = (params) => async (dispatch) => {
    const response = await menuItemApi.allMenuItem(params);
    if (response.data.success) {
        dispatch({
            type: menuItemActionType.ALL_MENU_ITEM,
            payload: response.data.data,
        });
    }
    return response.data;
};

export const MenuItemByCat = (params) => async (dispatch) => {
    const response = await menuItemApi.MenuItemByCat(params);
    console.log("er", response)
    if (response.data.success) {
        dispatch({
            type: menuItemActionType.MENU_ITEM_BY_CAT,
            payload: response.data.data.menu,
        });
    }
    return response.data;
};
export const MenuItemByVendor = (param) => async (dispatch) => {
    const response = await menuItemApi.MenuItemByVendor(param);
    if (response.data.success) {
        dispatch({
            type: menuItemActionType.MENU_ITEM_BY_VENDOR,
            payload: response.data.data,
        });
    }
    return response.data;
};
export const MenuItemBySubCat = (param) => async (dispatch) => {
    const response = await menuItemApi.MenuItemBySubCat(param);
    if (response.data.success) {
        dispatch({
            type: menuItemActionType.MENU_ITEM_BY_SUBCAT,
            payload: response.data.data,
        });
    }
    return response.data;
};


export const deleteMenuItem = (param) => async (dispatch) => {
    console.log('action param', param)
    const response = await menuItemApi.deleteMenuItem(param);
    if (response) {
        dispatch({
            type: menuItemActionType.DELETE_MENU_ITEM,
            payload: param,
        });
    }
    return response.data;
};

export const updateMenuItem = (param) => async () => {
    const response = await menuItemApi.updateMenuItem(param);
    return response.data;
};
export const uploadMenuItemImage = (formData) => async (dispatch) => {
    const resp = await menuItemApi.uploadImage(formData);
    return resp;
};