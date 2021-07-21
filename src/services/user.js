import { client } from "./index";

export const  getUser = (params) => client.post("api/users/user", params);
export const  updateUser = (params) => client.put("api/users", params);
export const  updatePass = (params) => client.put("api/users/updatepass", params);
export const  updateEmail = (params) => client.put("api/users/update_email", params);
export const  contact = (params) => client.post("api/users/contact", params);


