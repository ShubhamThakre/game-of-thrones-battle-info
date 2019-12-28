import React from 'react'
// import { Form, FormControl, Button } from "react-bootstrap";
import { Row,Col,Image } from 'react-bootstrap'

const my_image = "images/06.png";
const BattleInfoSection = () =>{
    return(
        <div className="" >
            <Row>
                <Col xs={12} md={6} lg={6} style={{}}>
                    <div>
                        <div className="top_wrapper">
                            <div className="top_wrapper_body">
                                <span className="top_wrapper_headline">Attacker King:</span><br />
                                <span className="top_wrapper_headText">King Name</span><br />
                                <div className="people_element_wrapper">
                                    <Image src="images/11.png"  className="people_element_img" roundedCircle/>
                                    <div className="people_element_numBox">
                                        <span>100</span>
                                    </div>
                                </div>
                            </div>
                            <Image src={my_image} rounded  className="img_kings"/>
                        </div>
                        <div className="bottom_wrapper">
                            <div className="commander_wrapper">
                                <span className="commander_text">Commander: Some Commander</span>
                            </div>
                            <div className="row region_wrapper">
                               <Col  xs={12} md={6} lg={6}>
                                <span className="region_text">Region: Some Region</span>
                               </Col>
                               <Col  xs={12} md={6} lg={6}>
                                <span className="region_text">Battle Type: Some battletype</span>
                               </Col>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={6} style={{}}>
                <div>
                <div className="top_wrapper">
                    <div className="top_wrapper_body">
                        <span className="top_wrapper_headline">Attacker King:</span><br />
                        <span className="top_wrapper_headText">King Name</span><br />
                        <div className="people_element_wrapper">
                            <Image src="images/11.png"  className="people_element_img" roundedCircle/>
                            <div className="people_element_numBox">
                                <span>100</span>
                            </div>
                        </div>
                    </div>
                    <Image src={my_image} rounded  className="img_kings"/>
                </div>
                <div className="bottom_wrapper">
                    <div className="commander_wrapper">
                        <span className="commander_text">Commander: Some Commander</span>
                    </div>
                    <div className="row region_wrapper">
                       <Col  xs={12} md={6} lg={6}>
                        <span className="region_text">Region: Some Region</span>
                       </Col>
                       <Col  xs={12} md={6} lg={6}>
                        <span className="region_text">Battle Type: Some battletype</span>
                       </Col>
                    </div>
                </div>
            </div>
                </Col>
            </Row>
        </div>
    );
}



export default BattleInfoSection;