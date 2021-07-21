import { combineReducers } from "redux";
import authReducer from "./authReducer";
import vendorReducer from "./vendorReducer";
import prodCategoryReducer from "./prodCategoryReducer";
import prodSubCategoryReducer from "./prodSubCategoryReducer";
import cartReducer from "./cartReducer";
import menuItemReducer from "./menuItemReducer";
import orderReducer from "./orderReducer";
import userReducer from './userReducer'

export default combineReducers({
    auth: authReducer,
    productCategory: prodCategoryReducer,
    productSubCategory: prodSubCategoryReducer,
    vendor: vendorReducer,
    cart: cartReducer,
    menuItems: menuItemReducer,
    orders: orderReducer,
    user: userReducer
});
