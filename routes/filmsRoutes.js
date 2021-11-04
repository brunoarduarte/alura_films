const router = require('express').Router();
const filmsController = require('../controller/filmsController');

router.get('/', filmsController.getAllFilms);

module.exports = router;
