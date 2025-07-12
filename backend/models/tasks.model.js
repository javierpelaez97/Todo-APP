const mongoose = require("mongoose")


const taskSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description: {type:String},
    userId:{ type: mongoose.Schema.Types.ObjectId, ref:'User',  required:true },  //LLamamos al id del esquema para que nos lo agrege    
    createdAt:{type:Date, default:Date.now},  // GUardamos la fecha alctual de la creacion de la tarea
})

module.exports = mongoose.model('Task', taskSchema)
