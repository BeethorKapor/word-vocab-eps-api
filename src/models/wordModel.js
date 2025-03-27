const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
  image: { type: String, required: true, default: null},
  lao: { type: String, required: true, default: null },
  thai: { type: String, required: false, default: null },
  english: { type: String, required: false, default: null },
  korean: { type: String, required: true, default: null },
});

const Word = mongoose.model("Word", WordSchema);
module.exports = Word;
