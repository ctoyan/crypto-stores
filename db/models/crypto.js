export default (sequelize, DataTypes) => {
  const Crypto = sequelize.define('Crypto', {
    abbr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Crypto.associate = (models) => {
    Crypto.belongsToMany(models.Store, through: 'Store_Crypto', as: 'Store');
  };

  return Crypto;
};
