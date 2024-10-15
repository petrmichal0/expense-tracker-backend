const mongoose = require("mongoose");

// Define the schema for expenses
// This outlines the structure of the expense document in the MongoDB database
const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number, // The amount spent
    required: true, // This field is required
  },
  date: {
    type: Date, // The date of the expense
    required: true, // This field is required
  },
  description: {
    type: String, // A description of the expense
    required: true, // This field is required
  },
});

// Create the Expense model based on the schema
// This model represents the expense collection in the database
const Expense = mongoose.model("Expense", expenseSchema);

// Export the Expense model so it can be used elsewhere in the application
module.exports = Expense;
