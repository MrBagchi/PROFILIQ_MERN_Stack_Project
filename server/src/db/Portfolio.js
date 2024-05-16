import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  workExperience: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
  },
  institute: {
    type: String,
  },

  domain: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  githuburl: {
    type: String,
  },
  linkedinurl: {
    type: String,
  },
});
export const Portfolio = mongoose.model("portfolio", PortfolioSchema);
