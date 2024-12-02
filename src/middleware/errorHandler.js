const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
      status: 'error',
      message: process.env.NODE_ENV === 'production' 
        ? 'An unexpected error occurred' 
        : err.message
    });
  };
  
  module.exports = errorHandler;