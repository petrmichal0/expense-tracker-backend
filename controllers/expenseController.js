const Expense = require("../models/expenseModel");
const catchAsync = require("../utils/catchAsync");

// Controller to fetch all expenses from the database
// Uses catchAsync to catch and handle errors in async functions
exports.getAllExpenses = catchAsync(async (req, res, next) => {
  const expenses = await Expense.find(); // Fetch all expenses
  res.status(200).json({ status: "success", data: { expenses } }); // Respond with fetched data
});

// Controller to create a new expense
// Takes data from the request body and saves it to the database
exports.createExpense = catchAsync(async (req, res, next) => {
  const newExpense = await Expense.create(req.body); // Create a new expense document
  res.status(201).json({ status: "success", data: { expense: newExpense } }); // Respond with the newly created expense
});

// Controller to update an existing expense by its ID
// Uses findByIdAndUpdate to modify the document in the database
exports.updateExpense = catchAsync(async (req, res, next) => {
  const updatedExpense = await Expense.findByIdAndUpdate(
    req.params.id, // ID of the expense to update
    req.body, // Updated data from request body
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure the data passes validation
    }
  );
  res.status(200).json({ status: "success", data: { expense: updatedExpense } }); // Respond with the updated expense
});

// Controller to delete an expense by its ID
// Removes the document from the database
exports.deleteExpense = catchAsync(async (req, res, next) => {
  await Expense.findByIdAndDelete(req.params.id); // Find and delete the expense by ID
  res.status(204).json({ status: "success", data: null }); // Respond with no content, indicating success
});
