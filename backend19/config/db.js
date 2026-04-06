import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOSE_URL);
    console.log("database connected");
  } catch (err) {
    console.error("dissconnected", err);
    process.exit(1);
  }
};

export default connectDB;
