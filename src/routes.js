import React from "react";
const RestaurantDetails = React.lazy(() => import("./containers/user/Restaurant/RestaurantDetails.js"));
const Home = React.lazy(() => import("./containers/user/HomeBody.js"));
const Login = React.lazy(() => import("./containers/user/Login/Login.js"));
const SignUp = React.lazy(() => import("./containers/user/SignUp/SignUp.js"));
const GridListingFilterscol = React.lazy(() => import("./containers/user/Listing/GridListingFIlterscol.js"));
const LeaveReview = React.lazy(() => import("./containers/user/Review/LeaveReview.js"));
const Order = React.lazy(() => import("./containers/user/Order/Order.js"))
const Orders = React.lazy(() => import("./containers/user/Order/Orders"))
const Profile = React.lazy(() => import("./containers/user/Profile/Profile"))
 //import Profile from './containers/user/Profile/Profile'
const EmailVerify = React.lazy(() => import("./containers/Verification/EmailVerify.js"))
const ForgetPassword = React.lazy(() => import("./containers/user/ForgetPassword/ForgetPassword.js"))
const routes = [
    // { path: "/", exact: true, name: "Login" },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: SignUp,
    },
    {
        path: "/forgetPassword",
        name: "forgetPassword",
        component: ForgetPassword,
    },
    {
        path: "/user/RestaurantDetails/",
        name: "RestaurantDetails",
        component: RestaurantDetails,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/subcategory/:id",
        name: "GridListingFilterscol",
        component: GridListingFilterscol,
    },
    {
        path: "/LeaveReview",
        name: "LeaveReview",
        component: LeaveReview,
    },
    {
        path: "/cart",
        name: "Order",
        component: Order,
    },
    {
        path: "/orders",
        name: "Orders",
        component: Orders,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/verifyemail",
        name: "EmailVerify",
        component: EmailVerify,
    },

];
export default routes;