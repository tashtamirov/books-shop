const {Router} = require('express')
const {booksController} = require('../controllers/books.controller')

const router = Router()

router.post('/books', booksController.addBook)
router.delete('/books/:id', booksController.deleteBookbyId)
router.patch('/books/:id', booksController.editBookbyId)
router.get('/books/:id', booksController.getBookById)
router.get('/books', booksController.getAllBooks)
router.get('/books/genre/:id', booksController.getAllBooksByGenreId)

module.exports = router