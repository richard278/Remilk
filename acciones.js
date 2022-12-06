import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

const acciones = () => {
  return (
<>
    <Form className="d-flex" sm={12} md={6} lg={4} xl={3}>
        <Form.Control
        type="search"
        placeholder="Search"
        className="me-12"
        aria-label="Search"/>
    </Form>
    <br/>
    <Form sm={12} md={6} lg={4} xl={3}>
        <Form.Group className="mb-3" controlId="id_saldo">
        <Form.Label>SALDO</Form.Label>
        <Form.Control type="email" placeholder="$0.00" />
        </Form.Group>
    </Form>

    <Card sm={12} md={6} lg={4} xl={3}>
      <Card.Header >ACCIONES</Card.Header>
      <Card.Body>
 
      <Button variant="outline-primary" className='m-1'>Enviar dinero</Button>
        <Button variant="outline-primary" className='m-1'>Recibir dinero</Button>
        </Card.Body>
    </Card>
    <br/>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Todas">

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Monto</th>
          <th>Precio</th>
          <th colSpan={2}>Total BTC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0.000179</td>
          <td >8015,4185</td>
          <td >8015,4185</td>
        </tr>
        <tr>
          <td>0.000434</td>
          <td>1015,4495</td>
          <td >8015,4185</td>
        </tr>
        <tr>
          <td>0.000161</td>
          <td>7015,4495</td>
          <td >8015,4185</td>
        </tr>
      </tbody>
    </Table>

      </Tab>
      <Tab eventKey="profile" title="Recientes">
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Monto</th>
          <th>Precio</th>
          <th colSpan={2}>Total ETH</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0.000179</td>
          <td >8015,4185</td>
          <td >8015,4185</td>
        </tr>
        <tr>
          <td>0.000434</td>
          <td>1015,4495</td>
          <td >8015,4185</td>
        </tr>
        <tr>
          <td>0.000161</td>
          <td>7015,4495</td>
          <td >8015,4185</td>
        </tr>
      </tbody>
    </Table>
      </Tab>
    </Tabs>
    </>
    
  );
}

export default acciones  
