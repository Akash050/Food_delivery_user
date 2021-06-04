import { client } from "./index";
export const allOrders = () => client.get(`api/order`);
export const createOrder = (params) => client.post(`api/order`, params);
export const orderByVendorId = (params) => client.post("api/order/orderByVendor", params);
export const updateOrder = (params) => client.put("api/order", params);
export const deleteOrder = (id) => client.delete(`api/order?id=${id}`);
export const updateStatus = (params) => client.put("api/order/status", params);
export const orderById = (params) => client.post("api/order/getById", params);


