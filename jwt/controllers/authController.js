const User = require('../models/user');

// handling error
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {email: '',  password: ''};

    // duplication error
    if(err.code == 11000){
        errors.email = 'the email is already registered.';
        return errors;
    }

    // validation err
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            // console.log(properties); 
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

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
        const errors = handleErrors(err);
        res.status(400).json({ errors }); 
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