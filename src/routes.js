import React from "react";
const RestaurantDetails = React.lazy(() => import("./containers/user/Restaurant/RestaurantDetails.js"));
const Home = React.lazy(() => import("./containers/user/HomeBody.js"));
const Login = React.lazy(() => import("./containers/user/Login/Login.js"));
const SignUp = React.lazy(() => import("./containers/user/SignUp/SignUp.js"));
const GridListingFilterscol = React.lazy(() => import("./containers/user/Listing/GridListingFIlterscol.js"));
const LeaveReview = React.lazy(() => import("./containers/user/Review/LeaveReview.js"));
const Order = React.lazy(() => import("./containers/user/Order/Order.js"))
const routes = [
    { path: "/", exact: true, name: "Login" },
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
        path: "/GridListingFilterscol",
        name: "GridListingFilterscol",
        component: GridListingFilterscol,
    },
    {
        path: "/LeaveReview",
        name: "LeaveReview",
        component: LeaveReview,
    },
    {
        path: "/Order",
        name: "Order",
        component: Order,
    },

];
export default routes;