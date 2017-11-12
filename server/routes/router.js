const Router = require('koa-router');
const register = require('../controller/registerController.js');
const router = new Router();

router.get('/register', register);

module.exports = router;