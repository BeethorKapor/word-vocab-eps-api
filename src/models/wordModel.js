const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
  image: { type: String, required: true },
  lao: { type: String, required: true },
  thai: { type: String, required: true },
  english: { type: String, required: true },
  korean: { type: String, required: true },
});

const Word = mongoose.model("Word", WordSchema);
module.exports = Word;
