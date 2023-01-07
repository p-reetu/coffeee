import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import expandLeft from "../icons/Expand_left.png";
import "./Header.css"
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import ClientForm from './ClientForm'

export default function Header(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
        <Navbar bg="white" sticky="top" style={{width:"100vw"}}>
        <Stack direction="horizontal" id="header-stack"  >
            <Button id="header-back-button"  variant="link">
                <img src={expandLeft} style={{height:"1.5rem"}} alt="back button"/>
            </Button>
            <b className='my-auto' style={{fontSize: "1.5rem"}}>Create Workorder</b>
            <Button onClick={handleShow} className='ms-auto' id="header-save-button">Save</Button>
        </Stack>
        </Navbar>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Workorder</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ClientForm/>
        </Offcanvas.Body>
      </Offcanvas>
        </>

    )
}