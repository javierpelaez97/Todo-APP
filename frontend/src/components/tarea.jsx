import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Tarea({tareas, user}){

    const userId = user.userId._id
    const tareaUserId = tareas.userId

    console.log("Prueba", tareaUserId, userId, tareas);
    
    if(userId === tareaUserId){
        return(
            <Container fluid="md">
                <Row>
                    <Col className="mt-2">
                        <Card  className='bg-body-secondary'>
                            <Card.Body >
                                <Card.Title>{tareas.title}</Card.Title>
                                <Card.Text>{tareas.description}</Card.Text>
                                <Button variant="" className='me-3 border' >✅</Button>
                                <Button variant="" className='border border-black' >🗑️</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
            
            
        )
    }
}