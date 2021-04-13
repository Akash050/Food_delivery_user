import React, { useEffect } from 'react';
import routes from '../../../src/routes'
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
import HomeHeader from "../user/HomeHeader";
import HomeFooter from "../user/HomeFooter";
import Login from "../user/Login/Login";
import SignUp from './SignUp/SignUp';
const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
);
const TheLayout = () => {
    let location = useLocation();
    let pathName = location.pathname
    let history = useHistory();
    console.log(pathName)


    useEffect(() => {
        if (pathName == '/') {
            history.push('/login')
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