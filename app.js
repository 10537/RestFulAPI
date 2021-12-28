const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')

//Load Config
dotenv.config({ path: './config/config.env'})

//Middlewares
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Adds because you need the body parser
app.use(bodyParser.json())

//Routes
const postsRoute = require('./routes/post.js')
app.use('/posts', postsRoute)

mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
() => {
    console.log('connect to DB')
})

const PORT = process.env.PORT || 5000

//Listen the server
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));