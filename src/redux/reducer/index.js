import { combineReducers } from "redux";
import authReducer from "./authReducer";
import vendorReducer from "./vendorReducer";
import prodCategoryReducer from "./prodCategoryReducer";
import prodSubCategoryReducer from "./prodSubCategoryReducer";
export default combineReducers({
    auth: authReducer,
    productCategory: prodCategoryReducer,
    productSubCategory: prodSubCategoryReducer,
    allVendors: vendorReducer,
});
