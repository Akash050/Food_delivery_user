import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import routes from '../src/routes'
import HomeHeader from "./containers/user/HomeHeader";
import HomeFooter from "./containers/user/HomeFooter";
import Login from "./containers/user/Login/Login";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <React.Suspense fallback={loading}>
            {/* <Route
              path="/"
              exact
              render={(props) => {
                return (
                  <Login {...props} />
                )
              }
              } /> */}
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
          </React.Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
