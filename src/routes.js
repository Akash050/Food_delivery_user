import React from "react";
const RestaurantDetails = React.lazy(() => import("./containers/user/Restaurant/RestaurantDetails.js"));
const Home = React.lazy(() => import("./containers/user/HomeBody.js"));
const Login = React.lazy(() => import("./containers/user/Login/Login.js"));
const routes = [
    { path: "/", exact: true, name: "Login" }, ,
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

];
export default routes;