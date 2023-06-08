const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  restrictions: [{ type: String }],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = {
  Category,
};
