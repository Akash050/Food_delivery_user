import { client } from "./index";

export const allProductSubCategory = (params) => client.get("api/subCategory", params);
export const addProductSubCategory = (params) => client.post("api/subCategory", params);
export const deleteProductSubCategory = (id) => client.delete(`api/subCategory?id=${id}`);
export const updateProductSubCategory = (params) => client.put(`api/subCategory`, params);
export const productSubCategoryById = (params) => client.put(`api/subCategory/getById`, params);
export const productSubCatByCategoryId = (params) => client.post(`api/menu/menuByCat`, params);
export const uploadImage = (formData) =>
    client.post(`api/category/upload`, formData);
