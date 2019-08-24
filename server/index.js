const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const routes = require('./routes')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = mongoose.connection

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
mongoose.connect('mongodb://localhost/authorizer', { useNewUrlParser: true });

if(!db) {
    console.log('Error connecting db')
}
else {
    console.log('db connected successfully')
}

app.get('/', (req,res) => {
    res.send('Hello')
})

app.use('/api', routes)

app.listen(port, () => {
    console.log(port)
})