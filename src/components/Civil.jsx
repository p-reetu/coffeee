import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Addround from '../icons/Add_round.png';
import Minusround from '../icons/minus_round.png';
import { useState } from 'react';
import Activity from './Activity'


export default function Civil(props) {
    const [open,setOpen] = useState(false);
    function openHandler(){
        setOpen(!open)
    }

  return (
    <>
    <Container id="civil-con"  fluid>
    <Row>
      <Col>

      <Form.Group className="mt-2 mb-2 ms-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={`Civil ${props.n}`} style={{fontWeight:"bold"}}/>
      </Form.Group>
      </Col>
      <Col className="mt-2 mb-2 ms-3">
      567.80
      </Col>
      <Col className="mt-2 mb-2 ms-3">
      <Row>
        <Col>₹ 2,98,6792</Col>
        <Col sm={2}  lg={2} className="pe-sm-0">
        <Button variant="link" id="open-close-button" onClick={openHandler}>
            {open ? <img src={Minusround} alt="close"/> : <img src={Addround} alt="open"/>}
        </Button>
        </Col>
      </Row>
      </Col>
    </Row>
    {   open ?
        <Row>
            <Activity n='1'/>
            <Activity n='2'/>
            <Activity n='3'/>
            <Activity n='4'/>
        </Row>
        :
        <Row></Row>
    }
  </Container>
  </>
  );
}
