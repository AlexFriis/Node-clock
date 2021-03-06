const { time } = require('console');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});


app.listen(process.env.PORT || 5000, () => {
    console.log(`listening on: 5000`);
});

