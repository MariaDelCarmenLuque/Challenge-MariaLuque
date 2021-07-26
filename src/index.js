//The express Module allows you to start the server.
const express = require('express');
//Execute server, object save in const app
const app = express();

/*
MIDDLEWARES
Functions that run before they enter the routes.
*/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Definition of routers
app.use(require('./routers/index'));
app.listen(3000);
//console message
console.log('Server on port 3000');