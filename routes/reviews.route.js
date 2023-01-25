const {Router} = require('express')
const { reviewController } = require('../controllers/review.controller')

const router = Router()

router.post('/reviews/books/:id', reviewController.addReviewByBookId)
router.delete('/reviews/:id', reviewController.deleteReview)
router.get('/reviews/books/:id', reviewController.getAllReviewsByBookId)

module.exports = router