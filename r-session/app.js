const express = require('express')
const session = require('express-session')
const redis = require('redis')
const connectRedis = require('connect-redis')

const app = express()
const port = process.env.PORT || 3000

// If running behind a reverse proxy
app.set('trust proxy', 1)

const RedisStore = connectRedis(session) // wire up our connect redis package to the express-session

//configure redis
const redisClient = redis.createClient({
    port: 6379,
    host: 'localhost'
})

app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: 'secret',
    saveUninitialized: false,
    resave: false,
    cookie:{
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 30 
    }
}))
 

app.post('/login', (req,res) => {
    const {email, password} = req
})

app.listen(port, () => {
    console.log(`Server started listenningi on Port ${port}`)
})