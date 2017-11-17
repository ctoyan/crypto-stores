module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  User.associate = function (models) {
    User.hasMany(models.Store);
    // User.hasMany(models.Comment);
  };

  return User;
};
