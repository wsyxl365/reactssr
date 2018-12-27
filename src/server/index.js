//const express = require('express');
import express from "express";
const app = express();
import {  renderToString } from "react-dom/server";
import { render } from "./utils";

// 客户端渲染
// React代码在浏览器上执行，消耗的是用户浏览器的性能

//服务器渲染
//React代码在服务器上执行，消耗的是服务器端的性能

//用express.static加载静态文件，从而达到客户端渲染 和 服务器端一起同构
app.use(express.static("public"));

app.get('*', (req, res) => {
        res.send(render(req));
    }
)

app.listen(3008, () => console.log('Example app listening on port 3008!'))