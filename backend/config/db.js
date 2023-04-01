const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://om-amonkar:68JiOwDwXVDKkoIc@newtest.2zxjlpl.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
