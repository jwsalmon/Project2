/*
price DEC,
newused VARCHAR(10)
*/
module.exports = function(sequelize, DataTypes) {
    var Forsale = sequelize.define("Forsale", {
      price: DataTypes.STRING,
      newused: DataTypes.STRING
    });
  
    Forsale.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Forsale.belongsTo(models.Books, {
        foreignKey: {
          allowNull: false
        }
      });
      Forsale.belongsTo(models.Usertable, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Forsale;
  };
  