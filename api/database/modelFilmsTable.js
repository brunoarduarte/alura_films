const Sequelize = require('sequelize');
const instancia = require('./index');

const columns = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  director: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  categoria: {
    type: Sequelize.ENUM('drama', 'thriller', 'terror', 'romance', 'comedy', 'action'),
    allowNull: false,
  }
};

const options = {
  feezeTableName: true,
  tableNAme: 'films',
  timestamps: true,
  createdAt: 'creationDate',
  updatedAt: 'updateDate',
  version: 'version'
}

module.exports = instancia.define('fornecedor', columns, options);
