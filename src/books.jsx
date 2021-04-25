import React from 'react';
import './books.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
class Books extends React.Component{
    render(){
        return(
            <section>
                <code>search for books,subjects,authors</code>
             <div className="in">
            <input type="text" placeholder="search"/>
            <FontAwesomeIcon className="ico" icon={faSearch} />

            </div>
            <button>
               go
            </button>
            </section>
        )
    }
}
export default Books;