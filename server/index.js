const express = require("express");
const { db } = require("./config/db");
const { CategoryRoutes } = require("./routes/CategoryRoute");
const { EventRoutes } = require("./routes/EventRoute");
const { PlaceRoutes } = require("./routes/PlaceRoute");
require("dotenv").config();

db.connect();
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api/categories", CategoryRoutes);
app.use("/api/events", EventRoutes);
app.use("/api/places", PlaceRoutes);


app.listen(3000);
