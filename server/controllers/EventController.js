const { Category } = require("../models/Category");
const { Event } = require("../models/Event");
const { Place } = require("../models/Place");

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
  getByCategoryName: (req, res) => {
    const inputName = req.params.name;

    Category.find({ name: { $regex: inputName, $options: "i" } }) // Find categories where the name includes the inputName (case-insensitive)
      .then((categories) => {
        if (categories.length > 0) {
          const categoryIds = categories.map((category) => category._id);
          Event.find({ category: { $in: categoryIds } })
            .populate("category")
            .populate("place")
            .then((data) => {
              res.json(data);
            })
            .catch((err) => {
              res.status(500).json(err);
            });
        } else {
          res.status(404).json({ msg: "Category not found!" });
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  getByCityName: (req, res) => {
    const inputCity = req.params.name;

    Place.find({ city: { $regex: inputCity, $options: "i" } }) // Find places where the city name includes the inputCity (case-insensitive)
      .then((places) => {
        if (places.length > 0) {
          const placeIds = places.map((place) => place._id);
          Event.find({ place: { $in: placeIds } }) // Find events where the place's city property is in the array of matching place IDs
            .populate("category")
            .populate("place")
            .then((data) => {
              res.json(data);
            })
            .catch((err) => {
              res.status(500).json(err);
            });
        } else {
          res.status(404).json({ msg: "City not found!" });
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  getByPlaceName: (req, res) => {
    const inputName = req.params.name;

    Place.find({ name: { $regex: inputName, $options: "i" } }) 
      .then((places) => {
        if (places.length > 0) {
          const placeIds = places.map((place) => place._id);
          Event.find({ place: { $in: placeIds } }) 
            .populate("category")
            .populate("place")
            .then((data) => {
              res.json(data);
            })
            .catch((err) => {
              res.status(500).json(err);
            });
        } else {
          res.status(404).json({ msg: "Place not found!" });
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  getByEventName: (req, res) => {
    const inputName = req.params.name;
    Event.find({ name: inputName })
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
