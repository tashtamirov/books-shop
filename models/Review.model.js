const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    reviewText: String,
    reviewAuthorName: String,
    reviewBook: {type: mongoose.SchemaTypes.ObjectId, ref: "Book"}
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review