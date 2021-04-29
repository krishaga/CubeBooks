import React from 'react';
import ReactDOM from 'react-dom';
import Ham from './ham.jsx';
import Logo from './logo.jsx';
import Header from './header.jsx';
import Books from './books.jsx';
import './index.css';
import Contact from './contact.jsx';
import Nav from './Nav.jsx';
import Switch from './switch.jsx';
ReactDOM.render(
  <div id="page">
  <div id="home">
  
  <Ham class="h"></Ham>
 
  <Nav class="n"></Nav>
  <Switch></Switch>
  <Logo></Logo>
 <div class="wrap"><Header></Header></div>
  <h1>welcome to cube books, the no 1 place to get all your books for free</h1>
</div>
<div class="wrapper">
<div id="books">
<Books></Books>
</div>
<div id="contact"><Contact></Contact></div>
</div>
</div>,
  document.getElementById('root')
);

