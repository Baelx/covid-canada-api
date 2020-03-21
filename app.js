const express = require('express');
const crawler = require('./utils/crawler');
const app = express();

const port = process.env.PORT || 3001;
// const CONCURRENCY = process.env.WEB_CONCURRENCY || 1;


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

app.get('*', (req, res) => {
    res.status(200).send("Not a valid endpoint. Navigate to /api/cases")
  });

app.listen(port, () => {console.log('Running.')})