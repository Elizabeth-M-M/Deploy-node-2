require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize, testDatabaseConnection } = require('./config/database');
const healthRoutes = require('./routes/healthRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/health', healthRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// Connect to database before starting server
async function startServer() {
  try {
    // Test database connection
    await testDatabaseConnection();

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

// Optional: Export app for testing
module.exports = app;