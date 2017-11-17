const Router = require('koa-router');
const register = require('../controller/registerController.js');
const login = require('../controller/loginController.js');
const router = new Router();

router.get('/register', register);
router.get('/login', login);
module.exports = router;