const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: String,
    mobile: String,
    create_date: {
        type: Date,
        default: Date.now
    }
})
module.exports = userSchema