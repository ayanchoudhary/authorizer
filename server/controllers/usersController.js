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
    const hash = sha256.create()
    var user = new User()
    user.name = req.body.name
    user.password = hash.update(JSON.stringify(req.body.password)).hex()
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

exports.view = function(req, res) {
    Users.findById(req.params.id, (err, user) => {
        if(err) {
            res.json({
                success:false,
                status:'error',
                message:err
            })
        }
        else {
            const hash = sha256.create()
            // const password = hash.update(JSON.stringify(req.body.password)).hex()
            // if(password == user.password)
            res.json({
                success:true,
                message:'User retrieved successfully',
                data:user
            })
        }
    })
}

exports.updatePass = function(req, res) {
    Users.findById(req.params.id, (err, user) => {
        if(err) 
            res.send(err)
        var hash = sha256.create()
        user.password = hash.update(JSON.stringify(req.param.password)).hex()
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

exports.updateInfo = function(req, res) {
    Users.findById(req,params.id, (err,user) => {
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
