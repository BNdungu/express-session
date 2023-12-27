const express = require('express')
const session = require('express-session')
const redis = require('redis')
const connectRedis = require('connect-redis')

const app = express()
const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Server started listenningi on Port ${port}`)
})