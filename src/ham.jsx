import React from 'react';
import './ham.css';
class Ham extends React.Component{
// constructor(props){
//     super(props);
    
//     }

toggle=()=>{
    document.getElementsByClassName("ham")[0].classList.toggle("anime");
    document.getElementsByClassName("nav")[0].classList.toggle("navAnime");
}
    render(){
        return (
            <div className="ham" onClick={this.toggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        );
    }
}
export default Ham;