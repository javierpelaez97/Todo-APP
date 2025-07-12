const mongoose = require("mongoose")
const express = require ("express")
require('dotenv').config();

const cors = require ("cors")

const userRoutes = require ("./routes/user.routes")

const tasksRoutes = require ("./routes/tasks.routes")

const app = express()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('conexion con la base de datos existosa');
    
})
.catch((err)=>{
    console.log(`Error al conectar con la base de datos ${err} `);
    
})

app.use("/api/users",userRoutes)
app.use("/api/tasks",tasksRoutes)

app.get('/', (req,res)=>{
    res.send ('API funcionando...')
})

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
})