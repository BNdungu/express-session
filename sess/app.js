const express = require('express')
const redis = require('redis')
const connectRedis = require('connect-redis')
const session = require('express-session')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const RedisStore = connectRedis(session)

const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379
})

redisClient.on('error', () => {
    console.error('Couldn\'t establish a connection wit the Redis Server')
})

redisClient.on('connect', () => {
    console.log('Connected to the redis Server')
})

app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        httpOnly: false,
        maxAge: 1000 * 60 * 10
    }
}))

app.listen(port, () => {
    console.log(`Server started to listen at port ${port}`)
})