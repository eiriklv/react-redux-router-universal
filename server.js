import path from 'path';
import express from 'express';
import handleRender from './render/server';

const app = express();
const port = process.env.PORT || 3000;

// Use this middleware to server up static files built into dist
app.use(require('serve-static')(path.join(__dirname, 'dist')));

// This is fired every time the server side receives a request
app.use(handleRender);

// attach to port
app.listen(port);
