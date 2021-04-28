import React from 'react';
import './Nav.css';

class Nav extends React.Component{
    render(){
        return(
            <div className="nav">
            <a href="#books" className="jj">Books<br></br></a>
           
            <a href="#contact">Contact</a>
            </div>
        )

        
    }
}
export default Nav;