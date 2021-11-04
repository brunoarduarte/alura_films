const Model = require('../api/database/modelFilmsTable');

module.exports = {
  list() {
    return Model.findAll();
  }
};
