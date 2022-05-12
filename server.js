// This is the web server, used to distribute the files in ./dist
const express = require('express');
const { join } = require('path');
let app = express();
app.use(express.static(join(__dirname, 'dist')));
const port = process.env.PORT || 5000;
app.listen(port);
