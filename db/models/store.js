export default (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    website: {
      type: DataTypes.TEXT,
    },
    phone: {
      type: DataTypes.STRING,
    },
    storeType: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['atm', 'physical', 'online'],
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Store.associate = (models) => {
    Store.hasMany(models.Comment);
    Store.hasMany(models.Location);
    Store.belongsToMany(models.Crypto, through: 'Store_Crypto', as: 'Crypto');
    Store.belongsTo(models.User);
  };

  return Store;
};
