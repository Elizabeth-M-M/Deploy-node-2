const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log('Database URL:', process.env.DATABASE_URL);

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Important for cloud databases
    }
  },
  logging: process.env.NODE_ENV === 'development' ? console.log : false
});

// Test database connection
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
}

module.exports = { 
  sequelize, 
  testDatabaseConnection 
};