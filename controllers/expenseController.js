const Expense = require("../models/expenseModel");
const catchAsync = require("../utils/catchAsync"); //This function helps catch any errors in asynchronous functions and passes them to the next middleware for handling.

exports.getAllExpenses = catchAsync(async (req, res, next) => {
  const expenses = await Expense.find();
  res.status(200).json({ status: "success", data: { expenses } });
});

exports.createExpense = catchAsync(async (req, res, next) => {
  const newExpense = await Expense.create(req.body);
  res.status(201).json({ status: "success", data: { expense: newExpense } });
});

exports.updateExpense = catchAsync(async (req, res, next) => {
  const updatedExpense = await Expense.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true, // Return the updated document
      runValidators: true, // Ensure the data passes validation
    }
  );
  res.status(200).json({ status: "success", data: { expense: updatedExpense } });
});

exports.deleteExpense = catchAsync(async (req, res, next) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.status(204).json({ status: "success", data: null });
});

