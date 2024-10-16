const express = require("express");
const expenseController = require("../controllers/expenseController");

const router = express.Router();

router
  .route("/")
  .get(expenseController.getAllExpenses)
  .post(expenseController.createExpense);

router
  .route("/:id")
  .patch(expenseController.updateExpense)
  .delete(expenseController.deleteExpense);

module.exports = router;
