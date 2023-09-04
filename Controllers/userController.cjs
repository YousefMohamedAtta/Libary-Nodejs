const userModel = require ('../Models/Users.Schema.cjs') 
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')


exports.register = async function(req,res){
    try {
        let newUser = new userModel(req.body) 
        const  hashedPassword = await bcrypt.hash(req.body.password , 11)
        newUser.password = hashedPassword
        await newUser.save()
        return res.json({message :"User Registered Succesfully", userSchema : {name :userSchema.name ,emali:userSchema.emali , id:userSchema._id }})
    }catch (err){ 
        return res.status(400).send({message: err})
    }
} 
exports.login = async function(req,res){
    try {
        let user= await userModel.findOne({email:req.body.email})
        if(!user || !user.comparePassword(req.body.password)){
            return res.status(401).json({message :" Authntication Faild , Invalid username or password"})
        }
        const token = jwt.sign({ name: user.name, emali: user.emali, id: user._id , role:user.role }, 'secuirtkey')
        return res.json({message :"User Logged in Succesfully", user : {name :user.name ,emali:user.emali , id:user._id ,token:token }})
    }catch (err){ 
        return res.status(400).send({message: err})
    }

}   