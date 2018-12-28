//import Home from "../../containers/Home";
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom"
import  Routers from "../../Routers";
import getStore from "../../store";
import { Provider } from "react-redux";


const App = () => {
    return (
        <Provider store={getStore()}>
            <BrowserRouter>
                { Routers }
            </BrowserRouter>
        </Provider>
    )
}

ReactDom.hydrate(<App/>, document.getElementById("root"));
