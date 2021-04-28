import React from 'react';
import './contact.css'
class Contact extends React.Component{
    render(){
        return(
            <section>
            <code>Contact US</code>
            <code>Want to leave a feedback or want a book which you can't find?
                feel free to contact us
            </code>
            <textarea placeholder="Enter your message"></textarea>
            
            <input type="text" className="name" placeholder="Full Name"/>
            
            <button className="send">send</button>
            </section>

        )
    }
}
export default Contact;