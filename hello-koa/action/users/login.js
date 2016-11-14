const User = require('../../models/user.js');

const login = async(ctx, next) =>{
    let name = ctx.params.name;
    console.log(name);
	// const user = await User.findAsync({name:name});
    // console.log(user)
    User.findOne({username:name}).exec(function(user){
        console.log('@@@@@@@@@@@')
        console.log(user)
    })
}

module.exports = login

