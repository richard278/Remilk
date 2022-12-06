import React from 'react'
import Container from 'react-bootstrap/Container';
import Header from './component/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidevar from './component/sidevar';
import Acciones from './component/acciones';
import Tarjetas from './component/Tarjetas';



const App = () => {
  return (
   <>
   <Header/>
    <Container>
      <Row sm={12} md={6} lg={4} xl={3}>
        <Col sm={12} md={6} lg={4} xl={3}><Sidevar/></Col>
        <Col sm={12} md={6} lg={4} xl={3}><Acciones/></Col>
        <Col sm={12} md={6} lg={4} xl={3}><Tarjetas/></Col>
      </Row>
    </Container>
    </>
  )
}

export default App