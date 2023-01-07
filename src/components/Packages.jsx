import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Packages(params) {
  return (
    <>
    <Container fluid>
    <Row id="packages-row">
      <Col>
      <Form.Group className="mt-2 mb-2 ms-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Packages" />
      </Form.Group>
      </Col>
      <Col className="mt-2 mb-2 ms-3">
      <b>Rate</b> <i>(in sqrt)</i>
      </Col>
      <Col className="mt-2 mb-2 ms-3">
      <b>Total</b>
      </Col>
    </Row>
  </Container>
  </>
  );
}
