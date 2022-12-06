import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const Tarjetas = () => {
  return (
    <>
    <Card sm={12} md={6} lg={4} xl={3}>
        <Card.Header >TARJETAS</Card.Header>
        <Card.Body>
        <div className="d-grid gap-2">
        <Button variant="outline-primary" >Crear wallet</Button>
        <Button variant="outline-primary" >Conectar Wallet</Button>
        </div>
        <Card.Text>Conversión</Card.Text>

        <FloatingLabel controlId="floatingTextarea2">
        <Form.Control
          as="textarea"
          placeholder=""
          style={{ height: '100px', marginTop:'15px'}}
        />
      </FloatingLabel>


        </Card.Body>
    </Card>


    </>
  )
}

export default Tarjetas
