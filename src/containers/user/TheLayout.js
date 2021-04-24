import React, { useEffect } from 'react';
import routes from '../../../src/routes'
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader";
import HomeFooter from "../../components/HomeFooter";
import Login from "../user/Login/Login";
import SignUp from './SignUp/SignUp';
import EmailVerify from '../Verification/EmailVerify';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import HomeBody from './HomeBody';
const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
);
const TheLayout = () => {
    let location = useLocation();
    let pathName = location.pathname
    let history = useHistory();
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(pathName)


    useEffect(() => {
        if (pathName == '/') {
            history.push('/home')
        }
    })
    return (
        <React.Suspense fallback={loading}>
            {pathName === '/login' ?
                <Route
                    exact
                    path="/login"
                    name="Login"
                    render={(props) => {
                        return <Login {...props} />;
                    }}
                />
                : pathName === '/register' ?
                    <Route
                        exact
                        path="/register"
                        name="register"
                        render={(props) => {
                            return <SignUp {...props} />;
                        }}
                    />
                    : pathName === '/forgetPassword' ?
                        <Route
                            exact
                            path="/forgetPassword"
                            name="forgetPassword"
                            render={(props) => {
                                return <ForgetPassword {...props} />;
                            }}
                        />
                        : pathName === '/verifyemail' ?
                            <Route
                                exact
                                path="/verifyemail"
                                name="verifyemail"
                                render={(props) => {
                                    return <EmailVerify {...props} />;
                                }}
                            />
                            : <>
                                <HomeHeader />
                                <Switch>
                                    {routes.map((route, idx) => {
                                        return route.component && (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={props => {
                                                    return (
                                                        <route.component {...props} />
                                                    )
                                                }
                                                } />
                                        )
                                    })}

                                </Switch>
                                <HomeFooter />
                            </>}
        </React.Suspense>
    );
}

export default TheLayout;