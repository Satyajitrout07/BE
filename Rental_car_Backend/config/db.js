// db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/Rental_car`);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ Error in DB connection:", err.message);
  }
};

export default connectDB;
