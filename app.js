// const helpers = require("./helper");
// // const { sum } = require("./helper");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("hello world from nodejs updated for package npm nodemon");
// });

// server.listen(3000);
// // var, let, const
// const total = helpers.sum(10, 400);
// // const total = sum(12, 69);
// console.log("total", total);


const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello express');
});

app.listen(3000);
