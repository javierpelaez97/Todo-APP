import { useContext, useEffect, useState } from "react";
import Tarea from "../components/tarea";
import CrearTarea from "../components/CrearTarea";
import axios from "axios";


export default function Tareas({ usuario }) {
  const [tareas, setTareas] = useState([]);

  const fetchTareas = async () => {
    try {
      const response = await axios.get(
        `https://todo-app-back-os1d.onrender.com/api/tasks/userTask`
      );
      setTareas(response.data);
    } catch (error) {
      console.error("Error al traer las tareas", error);
    }
  };

  useEffect(() => {
    fetchTareas();
  }, []);

  return (
    <>
      <h1>Todas mis tareas</h1>
      <CrearTarea user={usuario} onTraerTareas={fetchTareas}></CrearTarea>
      {tareas.map((tarea) => (
        <Tarea user={usuario} tareas={tarea}></Tarea>
      ))}

      <h2>Tareas borradas</h2>
    </>
  );
}
