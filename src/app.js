const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./configs/db");
const wordRoutes = require("./routes/wordRoutes");
const uploadRoutes = require("./routes/upload.route")
const {connectCloudinary} = require("./configs/index")

dotenv.config();
const app = express();

// เชื่อมต่อฐานข้อมูล
connectDB();
connectCloudinary();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use("/api-v1/words", wordRoutes);
app.use("/api-v1/file-upload", uploadRoutes)

// Start Server
const PORT = process.env.PORT || 10000 ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
