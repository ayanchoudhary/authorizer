const express = require('express')
const router = express.Router()
const controller = require('./controllers/usersController')

router.get('/', (req,res) => {
    res.json({
        status: 'working',
        message: 'Hello'
    })
})

router.route('/users')
    .get(controller.list)
    .post(controller.create)

router.route('/users/login')
    .post(controller.view)

router.route('/users/updatePass')
    .put(controller.updatePass)

router.route('/users/updateInfo')
    .put(controller.updateInfo)

router.route('/users/delete')
    .delete(controller.deleteUser)

module.exports = router