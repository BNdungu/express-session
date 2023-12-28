// import {createClient} from 'redis'
const redis = require('redis')

const client = redis.createClient()

client.on('error', () => {
    console.error('Couldn\'t connect to the redis server')
})

const store = async () => {
    await client.set('morning', '11:30am')
    const value = await client.get('morning')
    console.log(value)
}

const connect = async () => {
    await client.connect()
    console.log('Connected to the redis service')
    store()
}

connect()