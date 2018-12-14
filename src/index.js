//const express = require('express');
import express from "express";
const app = express();
import Home from "./containers/Home";
import React from 'react';
import {  renderToString } from "react-dom/server";
const content = renderToString(<Home />);


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