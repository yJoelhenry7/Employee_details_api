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

// Getting All the Employees
data.getAll = async (req, res) => {
  try {
    let employeeData = await employee.findAll({});
    return res.status(200).json({
      employeeData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

// Getting an employee based on ID
data.get = async (req, res) => {
  try {
    let id = req.params.id;
    let employeeData = await employee.findByPk(id);
    if (employeeData) {
      return res.status(200).json({
        employeeData,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: "No such user present",
        data: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

// update an employee based on ID
data.updateEmployee = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let employeeData = await employee.update(body, {
      where: {
        id: id,
      },
    });
    if (employeeData[0] === 0) {
      return res.status(200).json({
        success: false,
        error: `No user found with this ${id}`,
      });
    }
    return res.status(200).json({
      success: true,
      "number of rows changed": employeeData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};
module.exports = data;
