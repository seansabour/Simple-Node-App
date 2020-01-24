'use strict';
require('dotenv').config({ path: '/tmp/.env'})

const express = require('express');


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const version = process.env.VERSION

// App
const app = express();
app.get('/', (req, res) => {
    res.send(`Currently running on version:  ${version}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);