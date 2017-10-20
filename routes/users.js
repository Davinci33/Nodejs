var express = require('express');
var router = express.Router();
var regHandle = require('../model/usermodel');
/* GET users listing. */
var userCheck = require('../config/filter');
router.get('/reg', regHandle.reg);

router.post('/usereg',regHandle.userReg);

router.get('/reged',regHandle.reged);

router.get('/login',regHandle.login);
router.post('/logined',regHandle.logined);
router.get('/actived/:id',regHandle.actived);
router.get('/settings',userCheck,regHandle.settings);
router.post('/settinged',regHandle.settinged);
router.post('/settings/fixCode',regHandle.fixCode);

module.exports = router;
