import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import store from "./redux/store";
import TheLayout from "./containers/user/TheLayout";

function App(props) {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <TheLayout />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
