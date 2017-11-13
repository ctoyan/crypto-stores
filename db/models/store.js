module.exports = (sequelize, DataTypes) => {
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
    store_type: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['atm', 'physical', 'online'],
    },
  });

  Store.associate = function(models) {
    // associations can be defined here
  }

  return Store;
};
