const get = (req, res) => {
    const sess = req.session
    console.log(req.session)
    if (sess.username && sess.password){
        if(sess.username){
            res.write(`<h1>Welcome ${sess.username}</h1><br>`)
            res.write(`<h3>This is the homepage</h3>`)
            res.status(200).json({status: 'logged in'})
        }
    }
    else{
        res.status(200).json({
            status: 'Login page delvered'
        })
    }
}

const login = (req, res) => {
    const sess = req.session
    console.log(sess)
    const {username, password} = req.body
    console.log(username)
    sess.username = username
    sess.password = password
    res.send('succes')
}

module.exports = {
    get,
    login
}