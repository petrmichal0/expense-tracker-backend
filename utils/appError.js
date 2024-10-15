function AppError(message, statusCode) {
  const error = new Error(message); // We make a new Error object with a message
  error.statusCode = statusCode; // We add a statusCode to the error
  error.status = `${statusCode}`.startsWith("4") ? "fail" : "error"; // If statusCode starts with 4, it's a "fail"; if not, it's an "error"
  error.isOperational = true; // This is an operational error, not a technical one
  Error.captureStackTrace(error, AppError); // We capture where the error happened
  return error; 
}

module.exports = AppError; 
