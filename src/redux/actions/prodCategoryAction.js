import * as prodCategoryApi from "../../services/prodCategory";
import * as prodCategoryActionType from "../actionsType/prodCategoryActionType";

export const newProductCategory = (params) => async (dispatch) => {
    const response = await prodCategoryApi.addProductCategory(params);
    if (response && response.data.success) {
        dispatch({
            type: prodCategoryActionType.NEW_PRODUCT_CATEGORY,
            payload: response.data.data,
        });
    }
    return response && response.data;
};
export const allProductCategory = (params) => async (dispatch) => {
    const response = await prodCategoryApi.allProductCategory(params);
    if (response && response.data.success) {
        dispatch({
            type: prodCategoryActionType.ALL_PRODUCT_CATEGORY,
            payload: response.data.data,
        });
    }
    return response && response.data;
};

export const productCategoryById = (params) => async (dispatch) => {
    const response = await prodCategoryApi.productCategoryById(params);
    if (response && response.data.success) {
        dispatch({
            type: prodCategoryActionType.PRODUCT_CATEGORY_BY_ID,
            payload: response.data.data,
        });
    }
    return response.data;
};


export const deleteProductCategory = (param) => async (dispatch) => {
    console.log('action param', param)
    const response = await prodCategoryApi.deleteProductCategory(param);
    if (response) {
        dispatch({
            type: prodCategoryActionType.DELETE_PRODUCT_CATEGORY,
            payload: param,
        });
    }
    return response.data;
};

export const updateProductCategory = (param) => async () => {
    const response = await prodCategoryApi.updateProductCategory(param);
    return response.data;
};
export const uploadProdCategoryImage = (formData) => async (dispatch) => {
    const resp = await prodCategoryApi.uploadImage(formData);
    return resp;
};