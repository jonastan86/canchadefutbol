'use strict';
const {  Model } = require('sequelize');
const db = require('.');
module.exports = (sequelize, DataTypes) => {
  class cancha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
 
    }
  }
  cancha.init({
    cantidadjugadores: DataTypes.INTEGER,
    numerocancha: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cancha',
  });
  return cancha;
};