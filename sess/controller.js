const get = () => {
    const sess = req.session
    if (sess.username && sess.password){
        if(sess.username){
            res.write(`<h1>Welcome ${sess.username}</h1><br>`)
            res.write(`<h3>This is the homepage</h3>`)
            res.status(200).json({status: 'logged in'})
        }
    }
}

const login = () => {
    const sess = req.session
    const {username, password} = req.body
    sess.username = username
    sess.password = password
    res.send('succes')
}

module.exports = {
    get,
    login
}