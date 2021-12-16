const express = require('express')
const path = require('path')
require('dotenv').config()
const app = express()

app.use(express.static(path.join(__dirname, 'views')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const routes = require('./routes/route')
app.use(routes)

const PORT = process.env.PORT
app.listen(
    PORT,
    () => console.log(`http://localhost:${PORT}`)
)