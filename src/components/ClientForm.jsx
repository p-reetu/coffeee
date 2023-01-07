import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from 'react';

export default function ClientForm() {
  const [data,setData] = useState({
    name:'',
    doc1:'',
    doc2:'',
    rfq:''
  });
  function changeHandler(e){
    const {name,value} = e.target;
    setData({
      ...data,
      [name]:value
    }
    )
  }
  function submitHandler(){
    console.log(data)
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Client</Form.Label>
        <Form.Select aria-label="Default select example" value={data.name} onChange={changeHandler} name="name">
          <option>Client Name</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="doc1">
        <Form.Label>Date of Commencement</Form.Label>
        <Form.Control type="date" value={data.doc1} onChange={changeHandler} name="doc1"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="doc2">
        <Form.Label>Date of Completion</Form.Label>
        <Form.Control type="date" value={data.doc2} onChange={changeHandler} name="doc2"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="doc1">
        <Form.Label>RFQ Code</Form.Label>
        <Form.Control type="text" placeholder="RFQ Code" value={data.rfq} onChange={changeHandler} name="rfq"/>
      </Form.Group>

    <div id="done-button-div">
      <Button variant="primary"  id='done-button' className='my-auto' onClick={submitHandler}>
        Done
      </Button>
      </div>
    </Form>
  );
}
