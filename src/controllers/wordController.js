const Word = require("../models/wordModel");

exports.getRandomWord = async (req, res) => {
  try {
    const words = await Word.aggregate([{ $sample: { size: 1 } }]);
    res.json(words[0]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching word" });
  }
};

exports.createWord = async (req, res) => {
  try {
    const newWord = new Word(req.body);
    await newWord.save();
    res.json(newWord);
  } catch (error) {
    res.status(500).json({ message: "Error creating word" });
  }
};
exports.getAllWords = async (req, res) => {
  try {
    const skip = parseInt(req.query.skip) || 0;
    const limit = parseInt(req.query.limit) || 50;
    const words = await Word.find()
      .skip(skip)
      .limit(limit);
      const totalWords = await Word.countDocuments();

    res.status(200).json({
      message: "Words fetched successfully",
      total: totalWords,
      data: words,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching words",
      error: true,
    });
  }
};

exports.getWordById = async (req, res) => {
  try {
    const word = await Word.findById(req.params.id);
    if (!word) {
      return res.status(404).json({ message: "Word not found" });
    }
    res.json(word);
  } catch (error) {
    res.status(500).json({ message: "Error fetching word" });
  }
};

exports.updateWord = async (req, res) => {
  try {
    const updatedWord = await Word.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedWord);
  } catch (error) {
    res.status(500).json({ message: "Error updating word" });
  }
};

exports.deleteWord = async (req, res) => {
  try {
    await Word.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting word" });
  }
};
