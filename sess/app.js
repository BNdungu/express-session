const express = require('express')
const redis = require('redis')
const RedisStore = require('connect-redis').default; 
const routes = require('./routes')
const session = require('express-session')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v1',routes)


const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379
})

const redisStore = new RedisStore({
    client: redisClient,
    prefix: 'sess'
})

redisClient.on('error', () => {
    console.error('Couldn\'t establish a connection wit the Redis Server')
})

redisClient.on('connect', () => {
    console.log('Connected to the redis Server')
})

app.use(session({
    store: redisStore,
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        httpOnly: false,
        maxAge: 1000 * 60 * 10
    }
}))

app.listen(port, async () => {
    await redisClient.connect().catch(console.error);
    console.log(`Server started to listen at port ${port}`)
})