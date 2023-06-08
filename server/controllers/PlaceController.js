const { Place } = require("../models/Place");


const PlaceController = {
  getAll: (req, res) => {
    Place.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Place.findById(id)
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
    const place = new Place({
      name: req.body.name,
      address: req.body.address,
    });
    place.save();
    res.json(place);
  },
  deleteById: (req, res) => {
    const id = req.params.id;
    Place.findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = {
    PlaceController,
};
