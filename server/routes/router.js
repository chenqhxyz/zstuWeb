const Router = require('koa-router');
const register = require('../controller/registerController.js');
const login = require('../controller/loginController.js');
const check = require('../controller/checkController.js');
const router = new Router();

router.get('/register', register);
router.get('/login', login);
router.get('/check', check);
module.exports = router;