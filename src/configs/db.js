const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/myapp', {

    });
    console.log('Connected to database');
  } catch (error) {
    console.error("error:",error);
  }
};

module.exports = connectDB;