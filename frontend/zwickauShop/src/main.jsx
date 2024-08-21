import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./contexts/ContextProvider.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ContextProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </ContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
