'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
        
        },
        
      
      password: {
        type: Sequelize.STRING,
        allowNull: true
      }, 
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      role: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      telefono: {
        type:Sequelize.INTEGER,
        allowNull: false,
       
      },
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};