const express = require('express')
const logger = require('morgan')
const dotenv = require('dotenv').config()
const cors = require('cors')


const baserouter = require('./src/router/BaseRouter')

const app = express()


// plugins
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(logger("dev"))


// main route
app.use(baserouter)

// err handler
app.listen(process.env.PORT, ()=>{
    console.info(`Server listen at port:${process.env.PORT}`)
})
