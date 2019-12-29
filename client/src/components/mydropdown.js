import React from 'react'
import {  Button } from "react-bootstrap";
import '../AutoComplete.css'
import '../App.css'
class MyDropDown extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            suggestions: [],
            text:'',
            newItem: props.battleData
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({newItem: nextProps.battleData})
    }
    onTextChanged= (e) =>{
        const value = e.target.value;
        let suggestions = [];

        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i'); 
            //suggestions = this.item.sort().filter(v => v.text(regex));
            suggestions = this.state.newItem.sort().filter(v => regex.test(v));
        }
        this.setState(()=>({suggestions, text: value}));
    }
    renderSuggestion = () =>{
        const {suggestions} = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return(
            <ul>
                {suggestions.map( (item,index) => <li key={index} onClick={()=>this.suggestionsSelected(item)}>{item}</li>)}
            </ul> 
        );
    }
    suggestionsSelected = (value) =>{
        this.setState( () =>({
            text:value,
            suggestions:[]
        }));
    }
    handleClick = () =>{
        //console.log('state2', this.state);
        this.props.handleClickFunction(this.state.text);   
    }
    render(){
        const { text } = this.state;
       
        return(
            <div className="searchInputBox" >
                {/*<Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary" type="submit">Search</Button>
                </Form>*/}
                <div className="AutoCompleteTextBox">
                    <input
                        className="mr-sm-2 form-control" 
                        value={text} 
                        onChange={this.onTextChanged} 
                        type='text'
                        placeholder="Type Battle Name.." />
                     {this.renderSuggestion()} 
                </div>
                <div>
                <Button variant="outline-primary" type="submit" onClick={this.handleClick}>Search</Button>
                </div>
            </div>
        );
    };
}



export default MyDropDown;