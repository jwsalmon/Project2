/* author VARCHAR(50) NOT NULL,
bio VARCHAR(512), */
module.exports = function(sequelize, DataTypes) {
  var Authors = sequelize.define("Authors", {
    author: DataTypes.STRING,
    bio: DataTypes.STRING
  });

  Authors.associate = function(models) {
    // Associating Author with book and forsale
    Authors.hasMany(models.Books);
    Authors.hasMany(models.Forsale);
  };
  return Authors;
};
