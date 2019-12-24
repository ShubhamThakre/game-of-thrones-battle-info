import React from 'react'
// import { Form, FormControl, Button } from "react-bootstrap";
import { Row,Col,Image } from 'react-bootstrap'


const BattleInfoSection = () =>{
    return(
        <div className="" >
            <Row>
                <Col style={{border:'1px solid red'}}>
                    <div>
                        <div style={{'textAlign': 'left','fontWeight': 700}}>
                        <span style={{'font-size': '20px'}}>Attacker King:</span><br />
                        <span  style ={{'fontSize':'39px','padding': '0px 0px 0px 40px','z-index': '1'}}>
                        King Name</span><br />
                        <div style={{'padding': '0px 0px 0px 40px', display:'inline-flex'}}>
                            <Image src="logo192.png" roundedCircle  style={{width: '63px', height:'63px'}} />
                            <div style={{'padding':'6px 15px'}}>
                                <span style={{'fontSize':'30px'}}>100</span>
                            </div>
                        </div>
                        <Image src="logo192.png" rounded  style={{padding: '0px 0px 0px 300px',
                            position: 'relative',
                            margin: '-160px 0px 0px 55px',
                            'z-index': '-1'}}/>
                        </div>
                    </div>
                </Col>
                <Col style={{border:'1px solid red'}}>
                    6
                </Col>
            </Row>
        </div>
    );
}



export default BattleInfoSection;