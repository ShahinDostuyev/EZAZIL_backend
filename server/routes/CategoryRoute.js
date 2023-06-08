const express = require("express");
const { CategoryController } = require("../controllers/CategoryController");
const CategoryRoutes = express.Router();

CategoryRoutes.get("/", CategoryController.getAll);
CategoryRoutes.get("/:id", CategoryController.getById);
CategoryRoutes.post("/", CategoryController.add);
CategoryRoutes.delete("/:id", CategoryController.deleteById);

module.exports = {
  CategoryRoutes,
};
