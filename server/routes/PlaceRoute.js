const express = require("express");
const { PlaceController } = require("../controllers/PlaceController");
const PlaceRoutes = express.Router();

PlaceRoutes.get("/", PlaceController.getAll);
PlaceRoutes.get("/:id", PlaceController.getById);
PlaceRoutes.post("/", PlaceController.add);
PlaceRoutes.delete("/:id", PlaceController.deleteById);

module.exports = {
  PlaceRoutes,
};
