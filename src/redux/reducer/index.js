import { combineReducers } from "redux";
import authReducer from "./authReducer";
import vendorReducer from "./vendorReducer";
import prodCategoryReducer from "./prodCategoryReducer";
import prodSubCategoryReducer from "./prodSubCategoryReducer";
import cartReducer from "./cartReducer";
import menuItemReducer from "./menuItemReducer";
export default combineReducers({
    auth: authReducer,
    productCategory: prodCategoryReducer,
    productSubCategory: prodSubCategoryReducer,
    allVendors: vendorReducer,
    cart: cartReducer,
    menuItems: menuItemReducer
});
