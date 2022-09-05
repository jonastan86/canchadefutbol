'use strict';
const { Model } = require('sequelize');
const db = require('.');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
     
  }


  };
  User.init({
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isAlpha: { msg:"El nombre solo debe contener letras" },
        len: {
          args: [3,50],
          msg: "El nombre debe contener entre 3 a 50 letras"
        }
      },
      defaultValue: "Usuario"
    },
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        isAlpha: { msg:"El nombre solo debe contener letras" },
        len: {
          args: [3,50],
          msg: "El nombre debe contener entre 3 a 50 letras"
        }
      },
      defaultValue: "Usuario"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        notNull: {msg:"Email requerido"},
        isEmail: {msg:"Formato de email invalido"},
        len: {
          args: [5,100],
          msg: "El correo puede contener hasta 100 caracteres maximo"
        }
      }
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "user"
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
 
    },
  
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};