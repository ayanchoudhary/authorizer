User = require('../models/userModel')
const sha256 = require('js-sha256').sha256

exports.list = function (req, res) {
    User.get((err, users) => {
        if(err) {
            res.json({
                success:false,
                status:'error',
                message:err
            })
        }
        else {
            res.json({
                success:true,
                message:'Users retreived successfully',
                data:users
            })
        }
    })
}

exports.create = function(req, res) {
    User.find({'email':req.body.email}, (err,user) => {
        if (err) 
            res.send(err)
        else if(user != '') {
            console.log(user)
            res.json({
                success:false,
                message:'User exists'
            })
        }
        else {
            const hash = sha256.create()
            var user = new User()
            user.name = req.body.name
            user.password = req.body.password
            user.gender = req.body.gender
            user.email = req.body.email
            user.mobile = req.body.mobile
            user.save((err) => {
                if(err) {
                    res.json({
                        success:false,
                        status:'error',
                        message:err
                    })
                }
                else {
                        res.json({
                        success:true,
                        message:'User created successfully',
                        data:user
                    })
                }
            })
        }
    })
}

exports.view = function(req, res) {
    User.find({'email':req.body.email}, (err, user) => {
        if(err) {
            res.json({
                success:false,
                status:'error',
                message:err
            })
        }
        else {
            if(req.body.password == user[0].password)
            res.json({
                success:true,
                message:'User retrieved successfully',
                data:user
            })
            else
            res.json({
                success:false,
                message:'Wrong credentials',
            })
        }
    })
}

exports.updatePass = function(req, res) {
    User.find({'email':req.body.email}, (err, user) => {
        if(err) 
            res.send(err)
        else if(user != '') {
            user[0].password = req.body.password
            user[0].save((err) => {
                if(err) {
                    res.json({
                        success:false,
                        status:'error',
                        message:err
                    })
                }
                else {
                    res.json({
                        success:true,
                        message:'Password updated successfully',
                    })
                }
            })
        }
        else {
            res.json({
                success:false,
                message:'User does not exist'
            })
        }
    })
}

exports.updateInfo = function(req, res) {
    User.find({'email':req.body.email}, (err,user) => {
        if(err)
            res.send(err)
        user.name = req.body.name
        user.gender = req.body.gender
        user.mail - req.body.mail
        user.mobile = req.body.mobile
        user.save((err) => {
            if(err) {
                res.json({
                    success:false,
                    status:'error',
                    message:err
                })
            }
            else {
                res.json({
                    success:true,
                    message:'User created successfully',
                })
            }
        })
    })
}

exports.deleteUser = function(req,res) {
    User.remove({'email':req.body.email}, (err) => {
        if(err)
            res.send(err)
        else {
            res.json({
                success:true,
                message:'Users deleted successfully'
            })
        }
    })
}
