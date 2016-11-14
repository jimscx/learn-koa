var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Promise = require('bluebird');


var UserSchema = new Schema({
  username: {// 真实姓名
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  weixin_name: String,
  signature: String, //个性签名
  password: { // 密码
    type: String,
    required: false
  },
  type: {
    type: Number,
    required: false,
    "default": 0
  },
  invite_code   : String, // 邀请码
  phone_number  : Number, // 电话号码
  address       : String, // 地址
  unionid       : String,
  openid: {// from weixin openid
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  nickname      : String,// from weixin 昵称
  sex           : String,// from weixin 性别 0->女 1->男
  language      : String,// from weixin 语言
  city          : String,// from weixin 城市
  province      : String,// from weixin 
  country       : String,// from weixin
  headimgurl    : String,// from weixin 头像路径
  privilege     : [],    // from weixin
  created_at    : {
    type: Date,
    "default": Date.now
  },
  activity: {
    type: Number
  }
});


var UserModel = mongoose.model('User', UserSchema);

// Promise.promisifyAll(UserModel);
// Promise.promisifyAll(UserModel.prototype);

module.exports = UserModel;
