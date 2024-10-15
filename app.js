const express = require("express");
const cors = require("cors"); 
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const compression = require("compression");
const AppError = require("./utils/appError");
const expenseRouter = require("./routes/expenseRoutes");

const app = express();

// Middleware to enable CORS
app.use(cors()); // This enables CORS for all origins

// Middleware
app.use(express.json());

// Set security HTTP headers
app.use(helmet());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: ["amount", "date", "description"],
  })
);

// Compression middleware
app.use(compression());

// Routes
app.use("/api/v1/expenses", expenseRouter);

// Handle undefined routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
