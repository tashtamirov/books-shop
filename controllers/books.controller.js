const Book = require('../models/Book.model')

module.exports.booksController = {
    addBook: (req, res) => {
        Book.create({
            name: req.body.name,
            author: req.body.author,
            genre: req.body.genre
        }).then((books) => {
            res.json(books)
        }).catch((error) => {
            res.json({error: error.message})
        })
    },

    deleteBookbyId: (req, res) => {
        Book.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json('книга удалена')
        }).catch((error) => {
            res.json({error: error.message})
        })
    },

    editBookbyId: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            author: req.body.author,
            genre: req.body.genre
        }).then((editBook) => {
            res.json(editBook)
        }).catch((error) => {
            res.json({error: error.message})
        })
    },

    getBookById: (req, res) => {
        Book.findById(req.params.id)
       .then((book) => {
           res.json(book)
        }).catch((error) => {
            res.json({error: error.message})
        })
    },

    getAllBooks: (req, res) => {
        Book.find().populate('author')
        .then((book) => {
            res.json(book)
        })
        .catch((error) => {
            res.json({error: error.message})
        }) 
    },

    getAllBooksByGenreId: (req, res) => {
        Book.find({genre: req.params.id})
        .populate('genre author' )   ///////POPULATE!!!!!!!!!!///////POPULATE!!!!!!!!!!///////POPULATE!!!!!!!!!!
        .then((books) => {
            res.json(books)
        })
        
    }
}