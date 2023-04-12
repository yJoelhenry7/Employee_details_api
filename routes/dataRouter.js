const data = require('../controllers/employeeController');
const router = require('express').Router();

router.post('/',data.create);
router.get('/', data.getAll);
module.exports = router;