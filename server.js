// This is the web server, used to distribute the files in ./dist
import express from 'express';
import { join } from 'path';
let app = express();
app.use(express.static(join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);
