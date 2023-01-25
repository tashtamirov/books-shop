const Genre = require('../models/Genre.model')

module.exports.genreController = {
    addGenre: (req, res) => {
        Genre.create({
            genreName: req.body.genreName,
            genreDescription: req.body.genreDescription
        }).then((newGenre) => {
            res.json(newGenre)
        }).catch((error) => {
            res.json({error: error.message})
        })
    },

    deleteGenreById: (req, res) => {
        Genre.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json('жанр удален')
        }).catch((error) => {
            res.json({error: error.message})
        })
    },

    getAllGenres: (req, res) => {
        Genre.find()
        .then((genres) => {
            res.json(genres)
        }).catch((error) => {
            res.json({error: error.message})
        })
    }

    
}