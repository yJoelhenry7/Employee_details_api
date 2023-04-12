const data = require('../controllers/employeeController');
const router = require('express').Router();

router.post('/',data.create);
router.get('/', data.getAll);
router.get('/:id', data.get);
router.put('/:id',data.updateEmployee);
module.exports = router;