import React from 'react';
import './ham.css';
class Ham extends React.Component{
    render(){
        return (
            <div className="ham">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        );
    }
}
export default Ham;