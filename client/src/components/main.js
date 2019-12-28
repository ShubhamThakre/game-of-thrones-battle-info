import React from 'react'
import { Row,Col } from 'react-bootstrap'
import MyDropDown from './mydropdown'
import BattleInfoSection  from "./battleinfosection";



class Main extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            msg:""
        }
    }
    componentDidMount = () =>{
    //     fetch('/get')
    //   // We get the API response and receive data in JSON format...
    //     .then(response => response.text())
    //     .then(data =>{
    //         console.log('data',data)
    //         this.setState({
    //             msg:data
    //         }) 
        
    //     })
    //     // Catch any errors we hit and update the app
    //     .catch(error => this.setState({ error, isLoading: false }));
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
                            <MyDropDown />
                        </div>
                    </Col>
                </Row>
                <Row className='row' style={{padding:'10px 0px'}}>
                    <Col style={{}}>
                        <BattleInfoSection />
                    </Col>
                </Row>
                
                {/*this.state.msg 8528137703 11024*/}
            </div>
        );
    }
}


export default Main;