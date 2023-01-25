const Review = require('../models/Review.model')

module.exports.reviewController = {
    addReviewByBookId: (req, res) => {
        Review.create({
            reviewText: req.body.text,
            reviewAuthorName: req.body.author,
            reviewingBook: req.body.id
        }).then((newReview) => {
            res.json(newReview)
        }).catch((error) => {
            res.json({error: error.message})
        })
    },

    deleteReview: (req, res) => {
        Review.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json('рецензия удалена')
        })
        .catch((error) => {
            res.json({error: error.message})
        })
    },

    getAllReviewsByBookId: (req, res) => {
        Review.find({reviewingBook: req.body.id})
        .then((allReviews) => {
            res.json(allReviews)
        })
        .catch((error) => {
            res.json({error: error.message})
        })
    },

    
}