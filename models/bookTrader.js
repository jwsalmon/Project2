module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("BookTrader", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return BookTrader;
};
