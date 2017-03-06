const express = require('express');
const path = require('path');

const port = process.env.PORT || 4444;
const basedir = __dirname + '/public';
const app = express();

app.use(express.static(basedir));
app.get('*', (request, response) => response.sendFile(path.join(basedir, 'index.html')));

app.listen(port);
