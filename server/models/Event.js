const { default: mongoose } = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  addDate: { type: Date, default: Date.now() },
  eventDate: { type: Date, default: Date.now() },
  price: [{ type: Number }],
  languages: [{ type: String }],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  participants: [{type:String}],
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place"
  },
  popularity: Number
});

const Event = mongoose.model("Event",eventSchema)

module.exports = {
    Event,
};
