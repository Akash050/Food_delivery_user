import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import TheLayout from "./containers/user/TheLayout";

function App(props) {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <TheLayout {...props} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
