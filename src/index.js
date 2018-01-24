import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
// import Input from './components/input';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// Parent component: Drop Down Menu
  //Child: List Input Heading
  //Child: List of Dropdown Items
    //Child: Dropdown Item