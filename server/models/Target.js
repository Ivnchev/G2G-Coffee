const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    coffee: {
        type: Number,
        required: [true, 'Title is required!'],
        min: [1, 'Title must be at least 5 characters !']
    },
    packages: {
        type: Number,
        required: [true, 'Title is required!'],
        min: [1, 'Title must be at least 5 characters !']
    },
    accessories: {
        type: Number,
        required: [true, 'Title is required!'],
        min: [1, 'Title must be at least 5 characters !']
    },
    date: {
        type: Date,
        required: [true, 'Date is required!'],
        match: [/\d{4}-\d{2}/, 'Date format is incorrect!'],
        trim: true,
    },
})



module.exports = mongoose.model('target', schema)