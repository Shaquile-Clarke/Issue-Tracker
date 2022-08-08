import mongoose from "mongoose";

const db = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("DATABASE ALREADY CONNECTED");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (err) {
    console.error(err);
  }
};

export default db;
