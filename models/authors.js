/* author VARCHAR(50) NOT NULL,
bio VARCHAR(512), */
module.exports = function(sequelize, DataTypes) {
  var Authors = sequelize.define("Authors", {
    author: DataTypes.STRING,
    bio: DataTypes.STRING
  });
  return Authors;
};
