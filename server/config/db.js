const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`monogoDb connected ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;