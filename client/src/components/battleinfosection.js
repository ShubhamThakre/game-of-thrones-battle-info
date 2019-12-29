import React from 'react'
import { Row,Col,Image } from 'react-bootstrap'


class BattleInfoSection extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            battleDataInfo: []
        }
        
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({battleDataInfo: nextProps.data})
    }
    render(){ 
       const AttackerImage = this.state.battleDataInfo.attackerID ? 'images/'+this.state.battleDataInfo.attackerID.imgID+'.png' : 'images/'+100+'.png';
       const DefenderImage = this.state.battleDataInfo.defenderID ? 'images/'+this.state.battleDataInfo.defenderID.imgID+'.png' : 'images/'+100+'.png';
       const dataDefiend =  this.state.battleDataInfo.message ? this.state.battleDataInfo.message[0] : null;
      
       
      
        return(
            <div className="" >
                <Row>
                    <Col xs={12} md={6} lg={6} style={{}}>
                        <div>
                            <div className="top_wrapper">
                                <div className="top_wrapper_body">
                                    <span className="top_wrapper_headline">Attacker King:</span><br />
                                    <span className="top_wrapper_headText">{dataDefiend ? dataDefiend.attacker_king !== "" ? dataDefiend.attacker_king :'--' : "King Name"}</span><br />
                                    <div className="people_element_wrapper">
                                        <Image src="images/11.png"  className="people_element_img" roundedCircle/>
                                        <div className="people_element_numBox">
                                            <span>{dataDefiend ? dataDefiend.attacker_size: '--'}</span>
                                        </div>
                                    </div>
                                </div>
                                <Image src={AttackerImage} rounded  className="img_kings"/>
                            </div>
                            <div className="bottom_wrapper">
                                <div className="commander_wrapper">
                                    <span className="commander_text">Commander: {dataDefiend ? dataDefiend.attacker_commander !== "" ? dataDefiend.attacker_commander : '--' :'--'}</span>
                                </div>
                                <div className="row region_wrapper">
                                   <Col  xs={12} md={6} lg={6}>
                                    <span className="region_text">Attacker Outcome: {dataDefiend ? dataDefiend.attacker_outcome == 'win' ? 'Win': 'Loss' : '--'}</span>
                                   </Col>
                                   <Col  xs={12} md={6} lg={6}>
                                    <span className="region_text">Attacker House: 
                                    {dataDefiend ? dataDefiend.attacker_1 !== "" ? dataDefiend.attacker_1 : '--': '--'}</span>
                                   </Col>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6} style={{}}>
                    <div>
                    <div className="top_wrapper">
                        <div className="top_wrapper_body">
                            <span className="top_wrapper_headline">Defender King:</span><br />
                            <span className="top_wrapper_headText">{dataDefiend ? dataDefiend.defender_king !== "" ? dataDefiend.defender_king : '--' : "King Name"}</span><br />
                            <div className="people_element_wrapper">
                                <Image src="images/11.png"  className="people_element_img" roundedCircle/>
                                <div className="people_element_numBox">
                                    <span>{dataDefiend ? dataDefiend.defender_size: '--'}</span>
                                </div>
                            </div>
                        </div>
                        <Image src={DefenderImage} rounded  className="img_kings"/>
                    </div>
                    <div className="bottom_wrapper">
                        <div className="commander_wrapper">
                            <span className="commander_text">Commander: {dataDefiend ? dataDefiend.defender_commander !== "" ? dataDefiend.defender_commander: '--': '--'}</span>
                        </div>
                        <div className="row region_wrapper">
                           <Col  xs={12} md={6} lg={6}>
                            <span className="region_text">Defender Outcome: {dataDefiend ? dataDefiend.attacker_outcome == 'win' ? 'Loss': 'Win' : '--'}</span>
                           </Col>
                           <Col  xs={12} md={6} lg={6}>
                            <span className="region_text">Defender House: 
                            {dataDefiend ? dataDefiend.defender_1 !== "" ? dataDefiend.defender_1 : '--': '--'}</span>
                           </Col>
                        </div>
                    </div>
                </div>
                    </Col>
                </Row>
            </div>
        );
    }
}



export default BattleInfoSection;