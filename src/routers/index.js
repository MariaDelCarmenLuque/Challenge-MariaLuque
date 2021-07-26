//Define URL
//Router object that allows you to define the server urls.
const { Router } = require('express');
const router = Router();

const { getAuthors } = require('../controllers/index.controller')
    //create route
router.get('/top10Authors', getAuthors);
router.post('/top10Authors', getAuthors);
//Export url
module.exports = router;

/*
npm i nodemon -D
permite reiniciar el servidor automaticamente
*/