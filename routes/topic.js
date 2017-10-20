
var express = require('express');
var router = express.Router();
var topic = require('../model/topicModel');


router.get('/create',topic.getView);
router.post('/create',topic.pubblishView);
router.post('/reply',topic.reply);

router.get('/:id',topic.detail);


module.exports=router;




















