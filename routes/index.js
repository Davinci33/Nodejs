var express = require('express');
var router = express.Router();
var idx = require('../model/usermodel')
/* GET home page. */
router.get('/signout', idx.loginOut);
router.get('/:id', idx.getIndex);
router.get('/', idx.index);


module.exports = router;
