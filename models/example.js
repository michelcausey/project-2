module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define("Patient", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Patient;
};
