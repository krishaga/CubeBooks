import React from 'react';
import './books.css';

import Subject from './Subject.jsx';
class Books extends React.Component{
    render(){
        return(
            <section>
                {/* <code className="clr">search for books,subjects,authors</code>
             <div className="in">
            <input type="text" placeholder="search"/>
            <FontAwesomeIcon className="ico" icon={faSearch} />

            </div>
            <button>
               Go
            </button> */}
            <h2 className="clr">Available Books</h2>
            <div className="avb">
                <Subject name="physics">physics</Subject>
                <Subject name="chem">chemistry</Subject>
                <Subject name="maths">maths</Subject>
                <Subject name="comp">computer science</Subject>
                <Subject name="engLit">Englist Literature</Subject>
                <Subject name="engLang">Englist Language</Subject>
                <Subject name="hindi">Hindi</Subject>
            </div>
            </section>
        )
    }
}
export default Books;