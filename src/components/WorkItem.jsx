import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arrow from '../icons/arrow.png';
import line from '../icons/line.png';
import { useState } from "react";

export default function WorkItem(props){
  const [c,setC] = useState(props.check);
  function handler(){
    setC(!c)
  }
    return(
        <Container  fluid>
    <Row>
      <Col>
      <Row>
        <Col lg={1}><img src={line} alt=""/></Col>
        <Col lg={1}><img src={arrow} alt=""/></Col>
      <Col>
      <Form.Group className="mt-2 mb-2 ms-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={`Work Item ${props.n}`} checked={props.check ? props.check : c} onClick={handler} />
      </Form.Group>
      </Col>
      </Row>
      </Col>
      <Col className="mt-2 mb-2 ms-3">
      
      </Col>
      <Col className="mt-2 mb-2 ms-3">
      <Row>
        <Col>₹ 2,98,6792</Col>
      </Row>
      </Col>
    </Row>
  </Container>
    )
}