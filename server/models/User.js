var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

exports.userSchema = mongoose.Schema({
    firstName: {type:String, required:'{PATH} is required!'},
    lastName: {type:String, required:'{PATH} is required!'},
    regno: {
        type: String,
        required: '{PATH} is required!',
        unique:true
    },
    salt: {type:String, required:'{PATH} is required!'},
    hashed_pwd: {type:String, required:'{PATH} is required!'},
    roles: [String],
    course:String,
    marklist:[
        {
            semester:String,
            paper:String,
            marks:String,
            modMark:String,
            practical:String
        }
    ]
});
exports.userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },
    hasRole: function(role) {
        return this.roles.indexOf(role) > -1;
    }
};

