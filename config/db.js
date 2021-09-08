const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useFindAndModify: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // });
    await mongoose.connect("mongodb://localhost:27017/mern_pagination");
    console.log("MongoDB Connection Success");
  } catch (error) {
    console.log("MongoDB Connection Failed");
    process.exit(1);
  }
};

module.exports = connectDB;
