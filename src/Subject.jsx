import React from 'react';
import './Subject.css';
 import ReactDOM from 'react-dom';
 import DN from './DN.jsx';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';
class Subject extends React.Component{
   
 addListner=(event)=>{
let sel=event.target;

let option=sel.options[sel.selectedIndex].value;

ReactDOM.render(<DN subject={this.props.name} req={option}></DN>,document.getElementById("root"));
}
render(){
    return(
        <select onChange={this.addListner}>
           <option>{this.props.children}</option>
           <option value="books">books</option>
            <option value="notes">notes</option>
            <option value="papers">question paper</option>
        </select>
    )
}
}
export default Subject;