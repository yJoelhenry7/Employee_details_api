'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee.init({
    fullName: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    address: DataTypes.STRING,
    primary: DataTypes.STRING,
    primaryNum: DataTypes.INTEGER,
    secondary: DataTypes.STRING,
    secondaryNum: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'employee',
  });
  return employee;
};