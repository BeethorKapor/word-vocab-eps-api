const express = require('express');
const router = express.Router();
const uploadController = require("../controllers/upload.controller")

const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });
router.post("/",upload.single('image'), uploadController.upLoadimage)

module.exports = router