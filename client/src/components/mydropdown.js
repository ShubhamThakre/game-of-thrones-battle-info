import React from 'react'
import { Form, FormControl, Button } from "react-bootstrap";
import '../AutoComplete.css'
import '../App.css'
class MyDropDown extends React.Component{
    constructor(props){
        super(props);
        this.item =[
            'David',
            'Davendra',
            'Sara',
            'Some new value'
        ]
        this.state ={
            suggestions: [],
            text:'',
        }
    }
   
    onTextChanged= (e) =>{
        const value = e.target.value;
        let suggestions = [];

        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i'); 
            //suggestions = this.item.sort().filter(v => v.text(regex));
            suggestions = this.item.sort().filter(v => regex.test(v));
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
                {suggestions.map( item => <li onClick={()=>this.suggestionsSelected(item)}>{item}</li>)}
            </ul> 
        );
    }
    suggestionsSelected = (value) =>{
        this.setState( () =>({
            text:value,
            suggestions:[]
        }));
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
                <Button variant="outline-primary" type="submit">Search</Button>
                </div>
            </div>
        );
    };
}



export default MyDropDown;