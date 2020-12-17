const User = require('../models/user');

const signup_get = (req, res) => {
    res.render('signup');
}

const login_get = (req, res) => {
    res.render('login');
}

const signup_post = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.create({email, password});
        res.status(201).json(user);
    } catch(err){
        console.log(err);
        res.status(400).send('error, user not created');
    }
}

const login_post = (req, res) => {
    res.send('user login');
}

module.exports = {
    signup_get,
    login_get,
    signup_post,
    login_post
}