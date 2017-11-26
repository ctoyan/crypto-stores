export default (sequelize, DataTypes) => {
  const Store_Crypto = sequelize.define('Location', {
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cryptoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Store_Crypto;
};
