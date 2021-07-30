const express = require('express');
const app = express();

app.get('/api/add', (req, res) => {
    const {query: {a, b}} = req;
    const result = Number(a) + Number(b);

    res
        .status(200)
        .send(result.toString());
});

module.exports = app;
