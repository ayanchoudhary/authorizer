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

router.route('/users/:id')
    .get(controller.view)
    .put(controller.updateInfo)

router.route('/:id')
    .put(controller.updatePass)

module.exports = router