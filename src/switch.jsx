import React from 'react';
import './switch.css';

class Switch extends React.Component{
    toggle=()=>{
        document.getElementsByClassName("sun")[0].classList.toggle("fadeAnime");
        document.getElementsByClassName("rays")[0].classList.toggle("fadeAnime");
        document.getElementsByClassName("rays")[1].classList.toggle("fadeAnime");
        document.getElementsByClassName("eclipse")[0].classList.toggle("hideAnime");
        // document.getElementsByClassName("eclipse")[0].classList.toggle("clrAnime");
        let clr=document.getElementsByClassName("clr");
        document.getElementsByTagName("body")[0].classList.toggle("clrAnime");
        for(let i=0;i<clr.length;i++){
            clr[i].classList.toggle("clrAnime");
        }
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