const cloudinary = require("cloudinary").v2;
module.exports = {
  upLoadimage: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send("No file uploaded.");
      }
      await cloudinary.uploader
        .upload_stream({ folder: "word-images" }, (error, result) => {
          if (error) {
            return res
              .status(500)
              .json({ message: "Error uploading image", error });
          }

          const filename = result.public_id.split("/").pop();
          const format = result.format;
          const outputName = filename + "." + format;
          res.json({ name: outputName, url: result.secure_url,error:false,message:"Image uploaded successfully" });
        })
        .end(req.file.buffer);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error uploading image" });
    }
  },
};
