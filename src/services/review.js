import { client } from "./index";

export const addReview = (params) => client.post("api/review", params);
//export const updateCart = (params) => client.put("api/cart", params);
//export const removeCart = (id) => client.delete(`api/cart?id=${id}`);

