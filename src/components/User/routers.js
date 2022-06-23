const { Router } = require('express');
const UserComponent = require('./controller');

const router = Router();

router.get('/all', UserComponent.findAll);
router.get('/:id', UserComponent.findById);
router.get('/detec', UserComponent.findByEmail);
router.post('/', UserComponent.create);
router.patch('/', UserComponent.updateById);
router.delete('/', UserComponent.deleteById);

module.exports = router;