const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require ("../models/user.model")

async function singup (req,res){
    try{
        const hash = await bcrypt.hash(req.body.password,10)
        const newUser = new User({
            name:req.body.name,
            email: req.body.email, 
            password:hash, 
            role:'user',
        })
        await newUser.save()
        return res.json({msg:"Registro correcto"})
    }catch(error){
        console.log(error);
        return res.json({msg:"Error al registrar"})
        
    }
}

async function login (req, res){
    try{
        const foundUser = await User.findOne({email: req.body.email})
        //Comprobamos que el email existe
        if(!foundUser){
            return res.status(400).json({msg:"Credenciales no válidas"})
        }else{
            const resultCompare = await bcrypt.compare(req.body.password, foundUser.password)
            if(!resultCompare){
                return res.status(400).json({msg:"Credenciales no validas"})
            }else{
                const token = jwt.sign({userId:foundUser._id},process.env.JWT_SECRET, {expiresIn:'1h'})
                return res.status(200).json({msg:"ok", token:token, userId:foundUser})
            }
        }
    }catch(error){
        console.log(error);
        return res.staus(500).json({msg:"Error"})
    }
}


module.exports={
    singup,
    login
}