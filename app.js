/** 
 * IMPORTS
 */
const config = require("./config.js")
const express = require('express')

const wordRoutes = require('./src/word/word.routes')


/**
 * APP SETUP
 */
const app = express()

app.use('/api/v1/word', wordRoutes)

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
})