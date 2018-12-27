import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routers from "../Routers";

export const render = (req) => {
    const content = renderToString((
        <StaticRouter location={ req.path } context={{}}>
            { Routers }
        </StaticRouter>
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