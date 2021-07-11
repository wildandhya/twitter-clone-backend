const db = require('../db/model')
const {hash, comparePassword} = require('../helper/hashingPassword')
const {generateToken} = require('../helper/authentication')
const {isEmailValid} = require('../helper/validation')

class AuthController{
    static async Register(req, res, next){
        const {username, email, password} = req.body

        // handler
        if(!username) return res.status(400).json({message:"username cannot be empty"})
        if(!email) return res.status(400).json({message:"email cannot be empty"})
        if(!password) return res.status(400).json({message:"password cannot be empty"})

        // email validation
        if(!isEmailValid(email)) return res.status(400).json({message:"sorry your email invalid"})
       
        // hashing password
        const hashedPassword = await hash(password)

        await db.user.create({username, email, password:hashedPassword})
        res.status(201).json({message:"Register Success"})
       
    }
    static async Login(req, res, next){
        const {email, password} = req.body

        if(!email) return res.status(400).json({message:"email cannot be empty"})
        if(!password) return res.status(400).json({message:"password cannot be empty"})

        const user = await db.user.findOne({where:{email}})
        if(user === null) return res.status(400).json({message:"email wrong"})
        // check password
        let checkPassword = await comparePassword(password, user.password)
        if(!checkPassword) return res.status(400).json({message:"password wrong"})
        
        // generate token
        let payload ={id:user.id, email:user.email}
        let token = await generateToken(payload)
        return res.status(200).json({message:"Login Success", token})
    }
}

module.exports = AuthController