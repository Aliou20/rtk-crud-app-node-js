import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
// import todosReducer from "./features/todosSlice";
import todosSlice from './feature/Slice1'

const store = configureStore({
  reducer: {
    todosState : todosSlice
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
