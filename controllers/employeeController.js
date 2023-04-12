const { employee, Sequelize } = require("../models");
const Op = Sequelize.Op;
let data = {};

// Create a new Employee
data.create = async (req, res) => {
  if (
    !req.body.fullName ||
    !req.body.jobTitle ||
    !req.body.phoneNumber ||
    !req.body.address ||
    !req.body.primary ||
    !req.body.primaryNum ||
    !req.body.secondary ||
    !req.body.secondaryNum
  ) {
    return res.status(400).send({
      success: false,
      message: "Content can not be Empty!",
    });
  }
  try {
    const newEmployee = {
      fullName: req.body.fullName,
      jobTitle: req.body.jobTitle,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      primary: req.body.primary,
      primaryNum: req.body.primaryNum,
      secondary: req.body.secondary,
      secondaryNum: req.body.secondaryNum,
    };
    let employeeData = await employee.create(newEmployee);
    return res.status(201).json({
      employeeData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};

module.exports = data;