const express = require("express");
const { EventController } = require("../controllers/EventController");
const EventRoutes = express.Router();

EventRoutes.get("/", EventController.getAll);
EventRoutes.get("/category/:name", EventController.getByCategoryName);
EventRoutes.get("/city/:name", EventController.getByCityName);
EventRoutes.get("/:name", EventController.getByEventName);
EventRoutes.get("/place/:name", EventController.getByPlaceName);
EventRoutes.post("/", EventController.add);
EventRoutes.delete("/:id", EventController.deleteById);

module.exports = {
  EventRoutes,
};
