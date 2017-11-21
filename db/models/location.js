export default (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    lat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    long: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Location.associate = (models) => {
    Location.belongsTo(models.Store);
  };

  return Location;
};
