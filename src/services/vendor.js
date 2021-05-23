import { client } from "./index";

export const allUsers = (params) => client.get("api/vendor", params);
export const userById = (params) => client.post("api/vendor/vendor", params);
export const deleteUser = (id) => client.delete(`api/vendor?id=${id}`, );
export const updateUser = (params) => client.put(`api/vendor`, params);
export const verify = (params) => client.post(`api/vendor/verify`, params);
export const block = (params) => client.post(`api/vendor/block`, params);


