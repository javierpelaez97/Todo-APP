const Task = require ("../models/tasks.model")


const addTask  = async (req,res)=> {
    try{
        console.log("Usuario autenticado", req.user)

        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            userId: req.user
            
        })
        await newTask.save()
         return res.status(201).json({msg:"Tarea creada", task: newTask})
    }catch(error){
        console.error( error);
        
        return res.status(500).json({msg:"Error al crear la tarea Back"})
    }
}

const getUserTasks = async (req, res) => {
    try {
         const tasks = await Task.find() 
        return res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener tareas', error });
    }
}


module.exports={
    addTask,
    getUserTasks
}

