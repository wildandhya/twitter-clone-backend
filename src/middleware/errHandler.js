module.exports = (err, req, res, next)=>{
    const errObject = (code, message)=>{
        return res.status(code).json({
            status:"error",
            name:err.name,
            message:message
        })
    }

    switch(err.name){
        
    }
}