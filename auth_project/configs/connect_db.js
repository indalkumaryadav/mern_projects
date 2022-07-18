import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017", {
      dbName: "usersdb",
    });
    console.log("database is connected ");
  } catch {
    console.log("database is not connected ");
  }
};

export default connectDB;
