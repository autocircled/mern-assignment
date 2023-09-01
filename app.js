const express = require("express");
const app = new express();

// dotenv
require('dotenv').config()

// routes
const routes = require("./src/Routes/api.js");

app.use(express.json());
app.use('/api', routes);

app.get("/", (req, res) => {
    res.send("Hello, Ostad!");
})

module.exports = app;