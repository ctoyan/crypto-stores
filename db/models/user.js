export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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

  User.associate = (models) => {
    User.hasMany(models.Store);
    User.hasMany(models.Comment);
  };

  return User;
};
