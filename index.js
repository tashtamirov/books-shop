const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(require('./routes/genres.route'))
app.use(require('./routes/authors.route'))
app.use(require('./routes/books.route'))
app.use(require('./routes/reviews.route'))

mongoose.connect('mongodb+srv://tashtamirov:Ncfuasusn9@cluster0.wdgsbkm.mongodb.net/books').then(() => console.log('Успешно соединились с сервером mongoDB'))
.catch(() => console.log('ошибка при присоединении с сервером'))

app.listen(3000, () => {
    console.log('Сервер запущен успешно')
})