import React from 'react';
import ReactDOM from 'react-dom';
import Ham from './ham.jsx';
import Logo from './logo.jsx';
import Header from './header.jsx';
import Books from './books.jsx';
import './index.css';
ReactDOM.render(
  <div id="page">
  <div id="home">
  <Ham></Ham>
  <Logo></Logo>
  <div className="wrapper"><Header></Header></div>
  <h1>welcome to cube books, the no 1 place to get all your books for free</h1>
</div>
<div id="books">
<Books></Books>
</div>
</div>,
  document.getElementById('root')
);

