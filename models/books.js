module.exports = function(sequelize, DataTypes) {
  var Books = sequelize.define("Books", {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    numpages: DataTypes.INTEGER
  });

  Books.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Books.belongsTo(models.Authors, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Books;
};

/* id int AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    genre VARCHAR(50),
    numpages int,
    authorid int, */
