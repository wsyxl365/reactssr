//const express = require('express');
import express from "express";
const app = express();
import Home from "./containers/Home";
import React from 'react';
import {  renderToString } from "react-dom/server";
const content = renderToString(<Home />);
// 客户端渲染
// React代码在浏览器上执行，消耗的是用户浏览器的性能

//服务器渲染
//React代码在服务器上执行，消耗的是服务器端的性能

app.get('/', (req, res) => res.send(`
    <html>
        <head>
            <title>ssr</title>
        </head>
        <body>
            ${content}
        </body>
    </html>
`))

app.listen(3008, () => console.log('Example app listening on port 3008!'))