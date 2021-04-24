import React from 'react';
import ReactDOM from 'react-dom';
import Ham from './ham.jsx';
import Logo from './logo.jsx';
import Header from './header.jsx';
import './index.css';
ReactDOM.render(
  <div>
  <Ham></Ham>
  <Logo></Logo>
  <div className="wrapper"><Header></Header></div>
  <h1>welcome to cube books, the no 1 place to get all your books for free</h1>
</div>,
  document.getElementById('root')
);

