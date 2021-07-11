const bcrypt = require('bcrypt')
module.exports = {
    hash:(password)=>{
        return bcrypt.hash(password, 10)
    },

    comparePassword:async(text, encryptedText)=>{
        let result = await bcrypt.compare(text, encryptedText)
        return result
    }
}