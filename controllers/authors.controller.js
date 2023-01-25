const Author = require('../models/Author.model')

module.exports.authorsController = {
    addAuthor: (req, res) => {
        Author.create({
            name: req.body.name,
            infoAboutAuthor: req.body.infoAboutAuthor
        })
        .then((author) => {
            res.json(author)
        })
        .catch((err) => {
            res.json(err)
        })
    },

    getAllAuthors: (req, res) => {
        Author.find()
        .then((allAuthors) => {
            res.json(allAuthors)
        })
        .catch((error) => {
            res.json({error: error.messaage})
        })
    }
}