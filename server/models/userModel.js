const mongoose = require('mongoose')
const schema = require('../schema/userSchema')
const User = module.exports = mongoose.model('User', schema)
module.exports.get = function(callback,limit) {
    User.find(callback).limit(limit)
}