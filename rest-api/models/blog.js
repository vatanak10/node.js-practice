const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        require: [true, 'title is required.']
    },
    body: {
        type: String,
        required: [true, 'body is required']
    }

});

const Blog = mongoose.model('blog', BlogSchema);

module.exports = Blog;