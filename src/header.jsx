import React from 'react';
import header from './header.jpg';
import './logo.css';
class Header extends React.Component{
    render(){
        return(
            <img src={header} alt="header" className="header" />
        );

        
    }
}
export default Header;