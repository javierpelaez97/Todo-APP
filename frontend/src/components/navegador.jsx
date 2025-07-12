import { useContext } from 'react'
import Container from 'react-bootstrap/esm/Container'

import NavLink from 'react-bootstrap/esm/NavLink'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { SessionContext } from '../contexts/SessionContext'

export default function  Navegador(){

  
    const {logout,user} = useContext(SessionContext)

    return(
        <>
            <Navbar bg='dark' data-bs-theme="dark">
                <Container>
                
                    <Navbar.Brand href='/' >Home</Navbar.Brand>
                        <Nav className='me-auto'>
                            {user? <NavLink href='/misTareas'> Mis Tareas</NavLink>: ''}
                            {user? '': <NavLink href='/login' >Login</NavLink>}
                            {user? '': <NavLink href='/register'>Registro</NavLink>}
                            <NavLink href='/area' >Mi perfil</NavLink>
                            {user?  <NavLink onClick={logout}>Logout</NavLink> : ''}
                        </Nav>
                
                </Container>

            </Navbar>
           
        </>
    )

}

