const router = require('express').Router({
	mergeParams: true,
});
const UserController = require('../controllers/user');

router.get('/', UserController.index);
router.get('/:userId', UserController.show);
router.post('/create', UserController.create);
router.put('/:userId/update', UserController.update);
router.delete('/:userId/delete', UserController.supprimer);

module.exports = router;