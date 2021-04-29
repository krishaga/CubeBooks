import React from 'react';
import './switch.css';

class Switch extends React.Component{
    toggle=()=>{
        document.getElementsByClassName("sun")[0].classList.toggle("fadeAnime");
        document.getElementsByClassName("rays")[0].classList.toggle("fadeAnime");
        document.getElementsByClassName("rays")[1].classList.toggle("fadeAnime");
        document.getElementsByClassName("eclipse")[0].classList.toggle("hideAnime");
    }
    render(){
        return(
            <div className="sun" onClick={this.toggle}>
                <div className="rays"></div>
                <div className="rays"></div>
                <div className="eclipse"></div>
            </div>
        )
    }
}
export default Switch;