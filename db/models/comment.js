export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.Store);
    Comment.belongsTo(models.User);
  };

  return Comment;
};
