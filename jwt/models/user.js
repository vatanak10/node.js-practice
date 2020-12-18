const mongoose = require('mongoose');
const {isEmail} = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail , 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter the password'],
        minlength: [6, 'Please enter password at least 6 characters']
    }
})

// fire function before doc saved to db
userSchema.pre('save', function (next) {
    console.log('user about to be created and saved', this);
    next();
});

// fire function after doc saved to db
userSchema.post('save', (doc, next) => {
    console.log('user created and saved to db', doc);
    next();
});

const User = mongoose.model('user', userSchema);

module.exports = User;