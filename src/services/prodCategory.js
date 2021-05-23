import { client } from "./index";

export const allProductCategory = (params) => client.get("api/category", params);
export const addProductCategory = (params) => client.post("api/category", params);
export const deleteProductCategory = (id) => client.delete(`api/category?id=${id}`);
export const updateProductCategory = (params) => client.put(`api/category`, params);
export const productCategoryById = (params) => client.put(`api/category/categoryById`, params);
export const uploadImage = (formData) =>
    client.post(`api/category/upload`, formData);
