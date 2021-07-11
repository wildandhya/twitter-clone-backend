const {verifyToken} = require('../helper/authentication')
module.exports={
    authorization:(req, res, next)=>{
        if(!req.headers.authorization){
            res.status(401).json({message:"not authenticated"})
        }

        const token = req.headers.authorization?.split(" ")[1]
        try{
            if(token){
                const credential = verifyToken(token)
                if(credential){
                    req.app.locals.credential = credential
                    return next()
                }
                res.status(401).json({message:"token invalid"})
            }
            res.status(401).json({message:"token invalid"})

        }catch(err){
            console.log(err)
        }

    }
}