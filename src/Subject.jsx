import React from 'react';
import './Subject.css';
 import ReactDOM from 'react-dom';
 import DN from './DN.jsx';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';
class Subject extends React.Component{
   
 addListner=(event)=>{
//let sel=event.target;

//var option=sel.options[sel.selectedIndex].value;
ReactDOM.render(<DN></DN>,document.getElementById("root"));
}
render(){
    return(
        <select onChange={this.addListner}>
           <option>{this.props.children}</option>
           <option>books</option>
            <option>notes</option>
            <option>question paper</option>
        </select>
    )
}
}
export default Subject;