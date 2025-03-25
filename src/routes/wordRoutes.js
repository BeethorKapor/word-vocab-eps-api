const express = require("express");
const { getRandomWord, createWord, updateWord, deleteWord, getAllWords, getWordById } = require("../controllers/wordController");

const router = express.Router();

router.get("/random", getRandomWord);
router.get("/", getAllWords);
router.get("/:id", getWordById);
router.post("/", createWord);
router.put("/:id", updateWord);
router.delete("/:id", deleteWord);

module.exports = router;
