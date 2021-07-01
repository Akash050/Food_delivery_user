import { client } from "./index";

export const  getUser = (params) => client.post("api/users/user", params);
export const  updateUser = (params) => client.put("api/user", params);


