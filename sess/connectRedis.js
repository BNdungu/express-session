const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis').default; 
const redis = require('redis');

const createClient = redis.createClient();
const app = express();

const client = createClient;
client.connect().catch(console.error);

const redisStore = new RedisStore({
    client: client,
    prefix: 'sess'
});

app.use(
    session({
        store: redisStore,
        resave: false,
        saveUninitialized: false,
        secret: 'secret'
    })
);

app.listen(3000, () => console.log('Server is listening'));


