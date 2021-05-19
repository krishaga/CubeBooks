import React from 'react';
import './books.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Subject from './Subject.jsx';
class Books extends React.Component{
    render(){
        return(
            <section>
                <code className="clr">search for books,subjects,authors</code>
             <div className="in">
            <input type="text" placeholder="search"/>
            <FontAwesomeIcon className="ico" icon={faSearch} />

            </div>
            <button>
               Go
            </button>
            <h2 className="clr">Available Books</h2>
            <div className="avb">
                <Subject>physics</Subject>
                <Subject>chemistry</Subject>
                <Subject>maths</Subject>
                <Subject>computer science</Subject>
                <Subject>Englist Literature</Subject>
                <Subject>Englist Language</Subject>
                <Subject>Hindi</Subject>
            </div>
            </section>
        )
    }
}
export default Books;