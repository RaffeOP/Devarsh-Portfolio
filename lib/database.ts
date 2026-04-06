import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connectToDatabase = async () => {
  if (!MONGODB_URI) {
    console.warn("MONGODB_URI is not defined. Features requiring database access will be disabled.");
    return;
  }

  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Database connection has already been established.");
    return;
  } 

  if (connectionState === 2) {
    console.log("Establishing database connection...");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "portfolio",
      bufferCommands: true,
    });
    console.log("Database connection established successfully.");
  } catch (err: any) {
    console.error("Database connection failed: ", err.message);
    // Allow the app to continue in offline mode rather than throwing
  }
};

export default connectToDatabase;
 