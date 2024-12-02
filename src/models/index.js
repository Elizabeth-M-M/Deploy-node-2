const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/database");

const db = {
  Sequelize,
  sequelize,
  // Add your models here as you create them
  // Example:
  // User: require('./user')(sequelize, Sequelize)
};

// If you have associations, define them here
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

module.exports = db;
