import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import exu from '../icons/Expand_up.png';
import exd from '../icons/Expand_down.png';
import arrow from '../icons/arrow.png';
import { useState } from 'react';
import WorkItem from './WorkItem'

export default function Activity(props){
    const [open,setOpen] = useState(false);
    const [v,setV] = useState(false);
    function handler(e){
      setV(e.target.checked)
    }
    function openHandler(){
        setOpen(!open)
    }

    return(
        <Container  fluid>
    <Row>
      <Col>
      <Row>
        <Col lg={1}><img src={arrow} alt=""/></Col>
      <Col>
      <Form.Group className="mt-2 mb-2 ms-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={`Activity ${props.n}`} onChange={handler}/>
      </Form.Group>
      </Col>
      </Row>
      </Col>
      <Col className="mt-2 mb-2 ms-3">
      567.80
      </Col>
      <Col className="mt-2 mb-2 ms-3">
      <Row>
        <Col>₹ 2,98,6792</Col>
        <Col  lg={2}>
        <Button variant="link" id="open-close-button" onClick={openHandler}>
            {open ? <img src={exu} alt="close"/> : <img src={exd} alt="open"/>}
        </Button>
        </Col>
      </Row>
      </Col>
    </Row>
    {   open ?
        <Row>
            <WorkItem n="1" check={v}/>
            <WorkItem n="2" check={v}/>
            <WorkItem n="3" check={v}/>
        </Row>
        :
        <Row></Row>
    }
  </Container>
    )
}