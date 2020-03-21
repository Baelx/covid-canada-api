const express = require('express');
const crawler = require('./utils/crawler');
const app = express();
const port = process.env.PORT || 3001;

app.set('json spaces');

app.get('/api/cases', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    crawler.site()
        .then(result => {
            res.status(200).send(JSON.stringify(result));
        })
        .catch(error => {
            res.status(500).send(JSON.stringify({
                error: "Not able to fulfil request. Canada Gov site may have changed covid-19 info URL or there may be network issues."
            }))
        })
})

app.listen(port, () => {})