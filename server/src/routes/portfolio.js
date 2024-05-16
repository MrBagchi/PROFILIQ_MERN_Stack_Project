import { Router } from "express";
import {
  createPortfolio,
  deletePortfolio,
  getPortfolios,
  getSinglePortfolio,
  updateProduct,
  checkUserPortfolio,
} from "../controllers/portfolio.js";

//authentication endpoints
const router = Router();
router.post("/create-portfolio", createPortfolio);
router.delete("/delete-portfolio", deletePortfolio);
router.get("/get-portfolios", getPortfolios);
router.get("/view-portfolio/:email", getSinglePortfolio);
router.post("/update-portfolio/:id", updateProduct);
router.get("/check-portfolio/:email", checkUserPortfolio);

export default router;
