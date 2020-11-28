const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: String,
  cuisine: [String],
  image: {
    type: String,
    required: true,
  },
  prep_time: {
    type: String,
    required: true,
  },
  serves: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  cooking_method: {
    type: [String],
    required: true,
  },
  creation_date: {
    type: Date,
    default: Date.now,
  },
  author_id: mongoose.Schema.Types.ObjectId,
  tags: [String],
});

module.exports = mongoose.model("recipesTest", RecipeSchema);
