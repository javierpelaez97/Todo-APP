import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Registro from "../../public/Images/CleanWork.jpg";
import Button from "react-bootstrap/esm/Button";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { SessionContext } from "../contexts/SessionContext";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const { register, handleSubmit } = useForm();
  const {login} = useContext (SessionContext)

  const navigate = useNavigate()
  

  function doRegister(datos) {

    axios
      .post("http://localhost:5000/api/users/signup", datos)
      .then((response) => {

        setUser({
          email: datos.email,
          password: datos.password,
          name: datos.name,
          surname: datos.surname,
        });
      navigate('/login')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Container className="pt-5">
        <Row>
          <Col sm={4}>
            <Image src={Registro} width={500} height={650}></Image>
          </Col>
          <Col sm={7} className="bg-body-secondary">
            <Form className="p-4" onSubmit={handleSubmit(doRegister)}>
              <h1>Registro</h1>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ejemplo@correo.com"
                    {...register("email")}
                  ></Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    {...register("password")}
                  ></Form.Control>
                </Form.Group>
              </Row>

              <Form.Group as={Col} controlId="Name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control placeholder="Nombre" type="name" {...register('name')}></Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="surname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  placeholder="Apellido"
                  type="surname"
                  {...register('surname')}
                ></Form.Control>
              </Form.Group>

              <Button variant="secondary" type="submit" className="mt-3">
                Registrarse
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
