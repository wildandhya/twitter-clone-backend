const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    generateToken:(payload)=>{
        return jwt.sign(payload, process.env.JWTSECRET)
    },

    verifyToken:(token)=>{
        return jwt.verify(token, process.env.JWTSECRET)
    }
}