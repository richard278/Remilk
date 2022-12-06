import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';

const sidevar = () => {
  return (
 
    <Accordion defaultActiveKey={['0']} alwaysOpen sm={12} md={6} lg={4} xl={3}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Gomelat wallet</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ul">
          <ListGroup.Item as="li"><Navbar.Brand href="/">Inicio</Navbar.Brand></ListGroup.Item>
          <ListGroup.Item as="li"><Navbar.Brand href="/tarjetas">Tarjetas</Navbar.Brand></ListGroup.Item>
          <ListGroup.Item as="li"><Navbar.Brand href="/transacciones">Transacciones</Navbar.Brand></ListGroup.Item>
          <ListGroup.Item as="li"><Navbar.Brand href="/conversor">Conversor</Navbar.Brand></ListGroup.Item> 
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Sub sección header</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ul">
          <ListGroup.Item as="li"><Navbar.Brand href="/ñconfiguracion">Configuración</Navbar.Brand></ListGroup.Item>
          <ListGroup.Item as="li"><Navbar.Brand href="/salir">Salir</Navbar.Brand></ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  );

}

export default sidevar
