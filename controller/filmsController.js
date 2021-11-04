const filmsModel = require('../model/filmsModel');

const getAllFilms = async (_req, res) => {
  const response = await filmsModel.list();
  return res.status(200).json(response);
};

module.exports = {
  getAllFilms,
};
