const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const dotenv = require('dotenv')

const postsRoutes = require('./routes/post')

// Initial config
dotenv.config()
const port = process.env.PORT
const stringConnection = process.env.MONGO_URI

// Connect to DB
mongoose.connect(stringConnection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB CONNECTED'))

mongoose.connection.on('error', (err) => {
    console.log(`Error with DB Connection ${err}`)
})

// Express instance
const app = express()

app.use(morgan('dev'))
app.use(expressValidator())
app.use(bodyParser.json())
app.use('/', postsRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`))