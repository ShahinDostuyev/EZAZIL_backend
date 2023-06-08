const { Event } = require("../models/Event");

const EventController = {
  getAll: (req, res) => {
    Event.find()
      .populate("category")
      .populate("place")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Event.findById(id)
      .then((data) => {
        if (data) {
          res.json(data);
        } else {
          res.status(404).json({ msg: "Not found!" });
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  add: (req, res) => {
    const event = new Event({
      name: req.body.name,
      description: req.body.description,
      addDate: req.body.addDate,
      eventDate: req.body.eventDate,
      price: req.body.price,
      languages: req.body.languages,
      category: req.body.category,
      participants: req.body.participants,
      place: req.body.place,
      popularity: req.body.popularity,
    });
    event.save();
    res.json(event);
  },
  deleteById: (req, res) => {
    const id = req.params.id;
    Event.findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = {
  EventController,
};
