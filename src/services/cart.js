import { client } from "./index";

export const cartByUser = (params) => client.post("api/cart/cartByUser", params);
export const addCart = (params) => client.post("api/cart", params);


