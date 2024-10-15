const express = require("express");
const expenseController = require("../controllers/expenseController");

// Initialize the Express router
const router = express.Router();

// Define routes for expenses
// GET: Fetch all expenses, POST: Create a new expense
router
  .route("/")
  .get(expenseController.getAllExpenses)
  .post(expenseController.createExpense);

// Define routes for specific expense by ID
// PATCH: Update an existing expense by ID, DELETE: Remove an expense by ID
router
  .route("/:id")
  .patch(expenseController.updateExpense)
  .delete(expenseController.deleteExpense);

// Export the router to be used in the main app
module.exports = router;
