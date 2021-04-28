import React from 'react';
import './Nav.css';

class Nav extends React.Component{
    render(){
        return(
            <div className="nav">
            <div className="link"><a href="#books" className="jj">Books<br></br></a>
            <br></br>
            <a href="#contact">Contact</a>
            </div>
            </div>
        )

        
    }
}
export default Nav;