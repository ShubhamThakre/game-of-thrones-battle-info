import React from 'react'
import { Row,Col } from 'react-bootstrap'
import MyDropDown from './mydropdown'
import BattleInfoSection  from "./battleinfosection";



class Main extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            msg:{},
            battleListArr :[],
            selectedItem:'',
            infoData:[],
            mainDiffView:false
        }
    }
    BattleArrayDataAPI = () =>{
        fetch('/api/data')
        .then(response => response.text())
        .then(data =>{
            const battleListData = JSON.parse(data);
            this.setState({
                battleListArr:battleListData.message
            }) 
        
        })
        // Catch any errors we hit and update the app
        .catch(error => console.log('Search box data fetching error',error));
    }
    BattlesInfoDataAPI = (nam) =>{
        // console.log('BattlesInfoDataAPI', nam);
        const opts={"name":nam}
        fetch('/api/battleinfo', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(opts)
        })
        .then(response => response.text())
        .then(data =>{
            const battleData = JSON.parse(data);
            this.setState({
                infoData:battleData
            }) 
        
        })
        // Catch any errors we hit and update the app
        .catch(error => console.log('Battle data fetching error',error));
    }
    componentDidMount = () =>{
        this.BattleArrayDataAPI();  
    }
    handleClickFunction = (battleNameFromUser) =>{
        if(battleNameFromUser){
            this.BattlesInfoDataAPI(battleNameFromUser);
            this.setState({mainDiffView: true});
        }
        
    }
    render(){
        return(
            <div>
                <Row className='' style={{}}>
                    <Col style={{padding:'0px 30px'}}> 
                        <span style={{color:'#736c63'}}>Hello Friends. Wanted to know exciting details for GOT battles.</span><br />
                        <span style={{color:'#736c63'}}>Search below in Searchbox. Type any battle name, must give a try!!</span>
                    </Col>
                </Row>
                <Row className='' style={{padding:'10px 0px'}}>
                    <Col md={{ span: 6, offset: 3 }} style={{padding:'0px 10px'}}>
                        <div className="MyDropDownComponent">
                            <MyDropDown battleData={this.state.battleListArr} handleClickFunction={this.handleClickFunction}/>
                        </div>
                    </Col>
                </Row>
                {this.state.mainDiffView && <Row className='row' style={{padding:'10px 0px'}}>
                    <Col style={{}}>
                        <BattleInfoSection data={this.state.infoData}/>
                    </Col>
                </Row>}
                
                {/*this.state.msg 8528137703 11024*/}
            </div>
        );
    }
}


export default Main;