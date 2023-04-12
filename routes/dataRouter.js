const data = require('../controllers/employeeController');
const router = require('express').Router();

router.post('/',data.create);

module.exports = router;