import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routers from "../Routers";
import getStore from "../store";
import { Provider } from "react-redux";

export const render = (req) => {
    const content = renderToString((
        <Provider store={getStore()}>
            <StaticRouter location={ req.path } context={{}}>
                { Routers }
            </StaticRouter>
        </Provider>
    ));
    return `
        <html>
            <head>
                <title>ssr自撸框架1</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/index.js"></script>
            </body>
        </html>
    `;
}