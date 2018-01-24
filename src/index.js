import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Item from './components/item';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Item />, document.getElementById('root'));
registerServiceWorker();


// Parent component: Drop Down Menu
  //Child: List Input Heading
  //Child: List of Dropdown Items
    //Child: Dropdown Item