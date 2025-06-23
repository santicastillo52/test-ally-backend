'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    last_login: {
      type: DataTypes.DATE
    },
     created_at: {
     type: DataTypes.DATE
    },
  }, {
    tableName: 'Users',
    underscored: true,
    timestamps: true
  });


  return User;
};
