import { client } from "./index";

export const allMenuItem = (params) => client.get("api/menu", params);
export const addMenuItem = (params) => client.post("api/menu", params);
export const deleteMenuItem = (id) => client.delete(`api/menu?id=${id}`);
export const updateMenuItem = (params) => client.put(`api/menu`, params);
export const MenuItemByVendor = (params) => client.post(`api/menu/menuByVendor`, params);
export const MenuItemBySubCat = (params) => client.post(`api/menu/menuBySubCat`, params);
export const MenuItemByCat = (params) => client.post(`api/menu/menuById`, params);
export const uploadImage = (formData) =>
    client.post(`api/menu/upload`, formData);
