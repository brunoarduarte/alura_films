const router = require('express').Router();
const filmsModel = require('../model/filmsModel');

router.get('/', async (req, res) => {
  const result = await filmsModel.list();
  res.status(200).json(result);
});

module.exports = router;
