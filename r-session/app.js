const express = require('express')
const session = require('express-session')
const redis = require('redis')
const connectRedis = require('connect-redis')

const app = express()
const port = process.env.PORT || 3000


const RedisStore = connectRedis(session) // wire up our connect redis package to the express-session

//configure redis
 

app.listen(port, () => {
    console.log(`Server started listenningi on Port ${port}`)
})