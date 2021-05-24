import * as prodSubCategoryApi from "../../services/prodSubCategory";
import * as prodSubCategoryActionType from "../actionsType/prodSubCatActionType";

export const newProductSubCategory = (params) => async (dispatch) => {
    const response = await prodSubCategoryApi.addProductSubCategory(params);
    if (response.data.success) {
        dispatch({
            type: prodSubCategoryActionType.NEW_PRODUCT_SUB_CATEGORY,
            payload: response.data.data,
        });
    }
    return response.data;
};
export const allProductSubCategory = (params) => async (dispatch) => {
    const response = await prodSubCategoryApi.allProductSubCategory(params);
    if (response.data.success) {
        dispatch({
            type: prodSubCategoryActionType.ALL_PRODUCT_SUB_CATEGORY,
            payload: response.data.data,
        });
    }
    return response.data;
};

export const productSubCategoryById = (params) => async (dispatch) => {
    const response = await prodSubCategoryApi.productSubCategoryById(params);
    if (response.data.success) {
        dispatch({
            type: prodSubCategoryActionType.PRODUCT_SUB_CATEGORY_BY_ID,
            payload: response.data.data,
        });
    }
    return response.data;
};
export const productSubCatByCategoryId = (params) => async (dispatch) => {
    const response = await prodSubCategoryApi.productSubCatByCategoryId(params);
    if (response.data.success) {
        dispatch({
            type: prodSubCategoryActionType.PRODUCT_SUB_CATEGORY_BY_CATEGORY_ID,
            payload: response.data.data,
        });
    }
    return response.data;
};


export const deleteProductSubCategory = (param) => async (dispatch) => {
    console.log('action param', param)
    const response = await prodSubCategoryApi.deleteProductSubCategory(param);
    if (response) {
        dispatch({
            type: prodSubCategoryActionType.DELETE_PRODUCT_SUB_CATEGORY,
            payload: param,
        });
    }

    return response.data;
};

export const updateProductSubCategory = (param) => async () => {
    const response = await prodSubCategoryApi.updateProductSubCategory(param);
    return response.data;
};
export const uploadProdSubCategoryImage = (formData) => async (dispatch) => {
    const resp = await prodSubCategoryApi.uploadImage(formData);
    return resp;
};