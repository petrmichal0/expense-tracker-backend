function AppError(message, statusCode) {
  const error = new Error(message); 
  error.statusCode = statusCode; 
  error.status = `${statusCode}`.startsWith("4") ? "fail" : "error"; 
  error.isOperational = true; // This is an operational error, not a technical one
  Error.captureStackTrace(error, AppError); // We capture where the error happened
  return error; 
}

module.exports = AppError; 
