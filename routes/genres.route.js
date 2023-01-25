const {Router} = require('express')
const { genreController } = require('../controllers/genres.controller')

const router = Router()

router.post('/genres', genreController.addGenre)
router.delete('/genres/:id', genreController.deleteGenreById)
router.get('/genres', genreController.getAllGenres)

module.exports = router

