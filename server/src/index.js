import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "../src/utils/dbutil.js";
import authRoutes from "./routes/auth.js";
import portfolioRoutes from "./routes/portfolio.js";
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send({ message: "welcome to portfoliq app" });
});

const PORT = process.env.PORT || 8000;
//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/portfolio", portfolioRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
