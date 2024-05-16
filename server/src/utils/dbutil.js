import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shaswat:shaswat1@cluster0.ut2gftr.mongodb.net/portfoliq"
    );
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error while MongoDB connection");
  }
};
