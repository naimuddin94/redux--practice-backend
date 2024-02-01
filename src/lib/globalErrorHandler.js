const globalErrorHandler = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message, error: err.error });
};

module.exports = globalErrorHandler;
