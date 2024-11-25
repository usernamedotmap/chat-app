import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected ba sa mongod db? " + "syempre oo");
  } catch (error) {
    console.log("Error connect to mongo db", error.message);
  }
};

export default connectToMongoDB;
