const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.MONGODB_URL);

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB connected ${conn.connection.host}`);
};

module.exports = connectDB;
