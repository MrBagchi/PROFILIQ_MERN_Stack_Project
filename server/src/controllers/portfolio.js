import { Portfolio } from "../db/Portfolio.js";
import slugify from "slugify";
export const createPortfolio = async (req, res) => {
  try {
    // console.log(req.body);
    const {
      firstName,
      lastName,
      userName,
      email,
      contact,
      gender,
      dob,
      workExperience,
      degree,
      institute,
      domain,
      description,
      githuburl,
      linkedinurl,
    } = req.body;

    const existingPortfolio = await Portfolio.findOne({ userName });
    // console.log(existingPortfolio);
    if (existingPortfolio) {
      return res.status(500).json({
        message: "User with same user name exists",
        success: false,
        data: null,
      });
    }

    const newPortfolio = await Portfolio.create({
      firstName,
      lastName,
      userName,
      email,
      contact,
      gender,
      dob,
      workExperience,
      degree,
      institute,
      domain,
      description,
      githuburl,
      linkedinurl,
    });
    return res.status(201).json({
      message: "Portfolio Created Successfully",
      success: true,
      data: newPortfolio,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      data: null,
    });
  }
};

//delete controller
export const deletePortfolio = async (req, res) => {
  try {
    console.log(req.params.id);
    const { id } = req.params;

    await Portfolio.findByIdAndDelete(id);
    res.status(201).send({
      success: true,
      message: "Portfolio Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting Portfolio",
      error,
    });
  }
};

export const getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find({})
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "All Portfolios Fetched Successfully",
      portfolios,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting Portfolios",
      error: error.message,
    });
  }
};

export const getSinglePortfolio = async (req, res) => {
  try {
    // console.log(req.params);
    const portfolio = await Portfolio.findOne({ email: req.params.email });
    // console.log(portfolio);
    res.status(200).send({
      success: true,
      message: "Single Portfolio Fetched",
      portfolio,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror while getitng single portfolio",
      error,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      userName,
      email,
      contact,
      gender,
      dob,
      workExperience,
      degree,
      institute,
      domain,
      description,
      githuburl,
      linkedinurl,
    } = req.body;

    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      { ...req.body, slug: slugify(userName) },
      { new: true }
    );
    await portfolio.save();
    res.status(201).send({
      success: true,
      message: "Product Updated Successfully",
      portfolio,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Updte product",
    });
  }
};

export const checkUserPortfolio = async (req, res) => {
  try {
    // console.log(req.params.email);
    const portfolio = await Portfolio.findOne({ email: req.params.email });
    // console.log(portfolio);
    if (portfolio) {
      return res.status(201).json({
        message: "Portfolio is there",
        success: true,
        data: portfolio,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      message: "Portfolio is not there",
      success: false,
      data: null,
    });
  }
};
