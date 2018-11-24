module.exports = function(sequelize, DataTypes) {
    var Usertable = sequelize.define("Usertable", {
      username: DataTypes.STRING,
      passwd: DataTypes.STRING,      
    });
    return Usertable;
};
  
