const express = require("express");
const { EventController } = require("../controllers/EventController");
const EventRoutes = express.Router();

EventRoutes.get("/", EventController.getAll);
EventRoutes.get("/:id", EventController.getById);
EventRoutes.post("/", EventController.add);
EventRoutes.delete("/:id", EventController.deleteById);

module.exports = {
  EventRoutes,
};
