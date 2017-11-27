const Router = require('koa-router');
const register = require('../controller/registerController.js');
const login = require('../controller/loginController.js');
const check = require('../controller/checkController.js');
const equip = require('../controller/inputEquipController.js');
const getEquip = require('../controller/getEquipController.js');
const editEquip = require('../controller/editEquipController.js');
const addLab = require('../controller/addLabController.js');
const getLab = require('../controller/getLabController.js');
const editLab = require('../controller/editLabController.js');
const addPass = require('../controller/addPassageController.js');
const getPass = require('../controller/getPassageController.js');
const editPass = require('../controller/editPassageController.js');
const deletePass = require('../controller/deletePassageController.js');
const router = new Router();

router.get('/register', register);
router.get('/login', login);
router.get('/check', check);
router.get('/equip', equip);
router.get('/getequip', getEquip);
router.get('/editequip', editEquip);
router.get('/addlab', addLab);
router.get('/getlab', getLab);
router.get('/editlab', editLab);
router.get('/addpass', addPass);
router.get('/getpass', getPass);
router.get('/editpass', editPass);
router.get('/dpass', deletePass);
module.exports = router;