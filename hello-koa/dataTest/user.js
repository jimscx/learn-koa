#!/usr/bin/env node
require('../db.js');
var mongoose = require('mongoose');
var User = require('../models/user.js');

var user = new User({
	username  :'test1',
    weixin_name : 'test1',
	phone_number :'18322678987',
	sex :'1',
    openid:'asdfsasadfassf35245235623fdsa'
});

user.saveAsync().then(function(savedData) {
	console.log(savedData);
	console.log('保存成功');
}).catch(function(err){
	console.log(err);
	console.log('添加成员失败');
});
