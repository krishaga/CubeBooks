import React from 'react';
import logo from './logo.png';

import './logo.css'
class Logo extends React.Component{
    render(){
        return(
            <img src={logo} alt="logo" class="logo"/>
            
        );
    }
}
export default Logo;