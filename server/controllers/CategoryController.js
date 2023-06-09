const { Category } = require("../models/Category");


const CategoryController = {
  getAll: (req, res) => {
    Category.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Category.findById(id)
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
    const category = new Category({
      name: req.body.name,
      description: req.body.description,
      restrictions: req.body.restrictions,
    });
    category.save();
    res.json(category);
  },
  deleteById: (req, res) => {
    const id = req.params.id;
    Category.findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = {
    CategoryController,
};
