
const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    ordered: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    ],
    favorites: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    ],
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [5, 'Title must be at least 5 characters !'],
        maxLength: [10, 'Description should be max 50 characters !']

    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description must be at least 10 characters !'],
        maxLength: [50, 'Description should be max 50 characters !']
    },
    imageURL: {
        type: String,
        required: [true, 'Image is required!'],
        match: [/^https?:\/\//, 'Image should be a valid http url!'],
        default: '../../assets/images/user-logo.png',
    },
    category: {
        type: String,
        default: 'coffee',
        enum: ['coffee', 'package', 'accessory']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})



module.exports = mongoose.model('product', schema)