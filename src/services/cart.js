import { client } from "./index";

export const cartByUser = (params) => client.post("api/cart/cartByUser", params);
export const addCart = (params) => client.post("api/cart", params);
export const updateCart = (params) => client.put("api/cart", params);
export const removeCart = (id) => client.delete(`api/cart?id=${id}`);

