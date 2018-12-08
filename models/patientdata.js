module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define("Patient", {
    name: DataTypes.STRING,
    dob: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    heightIN: DataTypes.INTEGER,
    description: DataTypes.TEXT
  });
  return Patient;
};
