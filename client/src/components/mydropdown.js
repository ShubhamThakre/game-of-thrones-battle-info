import React from 'react'
import { Form, FormControl, Button } from "react-bootstrap";


const MyDropDown = () =>{
    return(
        <div className="searchInputBox" >
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary" type="submit">Search</Button>
            </Form>
        </div>
    );
}



export default MyDropDown;