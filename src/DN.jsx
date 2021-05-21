import React from 'react';
import './DN.css';
import icon from './cubeicon.jpeg';
import Logo from './logo.jsx';
import App from './app.jsx';
import ReactDOM from 'react-dom';
class DN extends React.Component{
  res={ books:{
        engLit:{
            links:["https://drive.google.com/file/d/1uYn1gGa4OHLLZ8cHu_hduBs6kYPnOG73/view?usp=drivesdk",
           "https://drive.google.com/file/d/1wjtgTbwlaayEQsESnn-raPdVyYTfVGtn/view?usp=drivesdk",
        "https://drive.google.com/file/d/1HdxGfPakT1t6SwqQg3dTe803xl8w3CgH/view?usp=drivesdk",
    "https://drive.google.com/file/d/1M0NA4YvTS2eYUtNxOO0MATNrT3wWjqB7/view?usp=drivesdk",
    "https://drive.google.com/file/d/1p-ENSNQHezmLeuACytRW9e7pelc1-pJM/view?usp=drivesdk",
    "https://drive.google.com/file/d/1y1Ql0xOSty9RN9C7HFW8cHXACEJ_kPr6/view?usp=drivesdk"
],
names:["class 11 hornbil","class 11 snap shots","class 11 woven words","class 12 flamingo","class 12 kaleidoscope","class 12 vistas"]
        },
        maths:{
          links:["https://drive.google.com/file/d/11DZyXjeylgLjcb4HcLLSoYgk5AnQ04o7/view?usp=drivesdk",
                 "https://drive.google.com/file/d/11AMIuWMCojFovg-PLvjg54eKCYwgxmx1/view?usp=drivesdk"],
          names:["ncert maths class 12 part 1","ncert maths class 11"]
        },
        physics:{
            links:[],
            names:[]
          },
          comp:{
            links:[],
            names:[]
          },
          hindi:{
            links:[],
            names:[]
          },
          chem:{
            links:[],
            names:[]
          },
          engLang:{
            links:[],
            names:[]
          }
    },
    notes:{
        maths:{
            links:[],
            names:[]
          },
          physics:{
              links:[],
              names:[]
            },
            comp:{
              links:[],
              names:[]
            },
            hindi:{
              links:[],
              names:[]
            },
            chem:{
              links:[],
              names:[]
            },
            engLang:{
              links:[],
              names:[]
            },
            engLit:{
                links:[],
                names:[]
              }
    },
    papers:{
        maths:{
            links:[],
            names:[]
          },
          physics:{
              links:[],
              names:[]
            },
            comp:{
              links:[],
              names:[]
            },
            hindi:{
              links:[],
              names:[]
            },
            chem:{
              links:[],
              names:[]
            },
            engLang:{
              links:[],
              names:[]
            },
            engLit:{
                links:[],
                names:[]
              }
    }
  }
  renderOriginal=()=>ReactDOM.render(<App></App>,document.getElementById("root"))
    render(){
        let req=this.props.req;
      //  document.getElementsByTagName("body")[0].style.background="url('./background.jpeg')";
        let elems=[];
        // elems.push(<div onClick={this.renderOriginal} className="returnHome"><Logo></Logo></div>)
        if(this.res[req][this.props.subject].links.length===0){
          elems.push(<h1>Oops!</h1>)
          elems.push(<code>Sorry but the resource you requested for <br/>is currently unavialabe.We will try to make it available ASAP<br/>
          Till then stay home stay safe</code>)
        }
        for(let i=0;i<this.res[req][this.props.subject].links.length;i++){
           
            elems.push(<p className="download">{this.res[req][this.props.subject].names[i]}</p>)
            elems.push(<div  class="links"><a href={this.res[req][this.props.subject].links[i]}><img src={icon} class="cubeico" alt="download"/></a></div>)
        }
        return(<div class="container">
        <div onClick={this.renderOriginal} className="returnHome"><Logo></Logo></div>
        <div className="download-wrapper">{elems}</div>
        </div>)
    }
}
export default DN;