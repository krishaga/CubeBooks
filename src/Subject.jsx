import React from 'react';
import './Subject.css';

class Subject extends React.Component{
    // constructor(props){
    // super(props);
    // }
render(){
    return(
        <select value="physics">
           <option value="">{this.props.children}</option>
            <option value="books">books</option>
            <option value="notes">notes</option>
            <option value="question paper">question paper</option>
        </select>
    )
}
}
export default Subject;