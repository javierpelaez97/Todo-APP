import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';

import axios from "axios";
import { useState } from "react";

export default function CrearTarea({ user , onTraerTareas }) {
  const [form, setForm] = useState({ title: "", description: " " });
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://todo-app-back-os1d.onrender.com//api/tasks/addTask?token=${user.token}`,
        form,
      );
      console.log("Tarea creada: ", res.data);
      onclick={onTraerTareas}
    } catch (error) {
      console.error("Error al crear la tarea", error, token);
    }
  };

  return (
    <>
     <Container fluid="md">
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3" >
          <Form.Control
              name="title"
            placeholder="Título"
            onChange={handleChange}
            value={form.title}
            required
          />
          <Button variant="outline-secondary" type="submit">
            Crear tarea
          </Button>
        </InputGroup>


      </Form>


     </Container>


      {/* <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Título"
          onChange={handleChange}
          value={form.title}
          required
        />
        
        
      </form> */}
    </>
  );
}
