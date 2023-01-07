import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import "./Body.css"
import Packages from './Packages';
import Civil from './Civil';

export default function Body(params) {
    const [key, setKey] = useState('first');

    return(
    <div >
    <Tab.Container id="left-tabs-example" defaultActiveKey={key} activeKey={key} onSelect={(k) => setKey(k)}> 
        <Row style={{margin:"10px"}}>
        <Nav  >
            <Nav.Item>
              <Nav.Link eventKey="first" id="overview" 
              style={key === "first" ? {color:"black", borderBottom:"2px solid black"} : {color:"grey", borderBottom:"1px solid grey"}}
              ><b id="ov">Overview</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" id="other"
              style={key === "second" ? {color:"black", borderBottom:"2px solid black"} : {color:"grey", borderBottom:"1px solid grey"}}
              ><b id="ot">Other</b>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          </Row>
        <Tab.Content style={{margin:"10px"}}>
            <Tab.Pane eventKey="first">
              <Packages/>
              
              <Civil n='1'/>
              <Civil n='2'/>
              <Civil n='3'/>
              <Civil n='4'/>
              <Civil n='5'/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              Hello World
            </Tab.Pane>
          </Tab.Content>
    </Tab.Container>
    </div>
    )
}