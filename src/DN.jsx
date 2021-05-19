import React from 'react';

class DN extends React.Component{
    subject={
        english:{
            links:["https://drive.google.com/file/d/1uYn1gGa4OHLLZ8cHu_hduBs6kYPnOG73/view?usp=drivesdk",
           "https://drive.google.com/file/d/1wjtgTbwlaayEQsESnn-raPdVyYTfVGtn/view?usp=drivesdk",
        "https://drive.google.com/file/d/1HdxGfPakT1t6SwqQg3dTe803xl8w3CgH/view?usp=drivesdk",
    "https://drive.google.com/file/d/1M0NA4YvTS2eYUtNxOO0MATNrT3wWjqB7/view?usp=drivesdk",
    "https://drive.google.com/file/d/1p-ENSNQHezmLeuACytRW9e7pelc1-pJM/view?usp=drivesdk",
    "https://drive.google.com/file/d/1y1Ql0xOSty9RN9C7HFW8cHXACEJ_kPr6/view?usp=drivesdk"
],
names:["hornbil","snap shots","woven words","flamingo","kaleidoscope","vistas"]
        }
    }
    
    render(){
        let elems=[];
        for(let i=0;i<this.subject.english.links.length;i++){
            elems.push(<a href={this.subject.english.links[i]} className="download">{this.subject.english.names[i]}</a>)
        }
        return(elems)
    }
}
export default DN;