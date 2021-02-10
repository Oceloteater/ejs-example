const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const people = [
    { name: 'Mr Pink' },
    { name: 'Mr Black' },
    { name: 'Mr Blue'}
];

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', { people: people });
});

app.listen(port);