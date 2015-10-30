import {render} from 'react-dom';
import React from 'react';
import App from './components/App.jsx';
import './main.css';
main();


function main(){
  const app = document.createElement('div');
  document.body.appendChild(app);
  render(<App />, app);
};
