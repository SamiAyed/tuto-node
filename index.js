/* Load Modules */
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

/* Load Helpers */
require('./helpers/arrayHelper')
require('./helpers/objectHelper')

/* Load Routes */
const userRoutes = require('./routes/users')

/* Load Middlewares */
app.use(bodyParser.json())

/* Set Routes */
app.use('/users', userRoutes)


/* Start Server */
const port = 3000

app.listen(port, () => {
    console.log('Server Listening on port', port)
})
