
const jwt = require ('jsonwebtoken')
const User = require("../models/user.model")


/* 
    Middleware para que nos indique el token del usuario y si está autorizado o no 

*/

async function authMiddleware(req,res,next){
    const token = req.query.token
    if(!token){
        return res.status(401).json({msg:"no estás autenticado"})
    }else{
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET) //verificamos el token 
        req.user = tokenDecoded.userId;         
        const userId = tokenDecoded.userId                                  //guardamos en una variable el token decodificado
        const foundUser = await User.findById(userId)
            if(!foundUser){                                                 //Si el token decodificado está bien entramos en buscar el usuario
                return res.status(401).json({msg:"token no valido"})
            }else{
                
                next()
        }
    }
}

module.exports = {
    authMiddleware
}
