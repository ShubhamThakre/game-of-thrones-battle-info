import React from 'react'


//parent- Main
class Amit  extends React.Component{
    
    render(){
        const a = 'ABC';

        return(
            <div>
                I am Amit Component.
                <Abc data={a}/>
                row
                col-6 chart1
                col-6 chart 2
            </div>
        );
    }

}


//child- filter
const Abc = (props) =>{
    return(
        <div>
            I am {props.data}.
        </div>
    );
}


//Chart 1

//Chart 2

//Chart 3

//Chart 4


export default Amit