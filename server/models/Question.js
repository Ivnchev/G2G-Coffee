const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [5, 'Title must be at least 5 characters !']
    },
    answear: {
        type: String,
        required: [true, 'Answear is required!'],
        minLength: [10, 'Answear must be at least 10 characters !']
    },
    category: {
        type: String,
        required: [true, 'Category is required!'],
        enum: ['coffee', 'package', 'accessory'],
        default: 'coffee'
    }
})



module.exports = mongoose.model('question', schema)