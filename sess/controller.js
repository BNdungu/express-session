const get = () => {
    const sess = req.session
    if (sess.username && sess.password){
        if(sess.username){
            res.write(`<h1>Welcome ${sess.username}</h1><br>`)
            res.write(`<h3>This is the homepage</h3>`)
        }
    }
}

const login = () => {
    const sess
}