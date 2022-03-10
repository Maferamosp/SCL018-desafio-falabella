import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "./context/Context";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider>
                <App />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
);
