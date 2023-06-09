const { default: mongoose } = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: String,
  city: String,
  address: String
});


const Place = mongoose.model("Place", placeSchema);

module.exports = {
    Place,
};
