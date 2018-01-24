import React from 'react';
import Input from './input';
import List from './list';
import Item from './item';
import Slider from './slider';

import './app.css';

export default class App extends React.Component {
    
  constructor(props){
          super (props);
          this.state = {
            showList: false,
            allColors:[
              {color: 'red', rgb:'rgb(255, 0, 0)'},
              {color: 'orange', rgb:'rgb(255, 165, 0)'},
              {color: 'yellow', rgb: 'rgb(255, 255, 0)'},
              {color: 'green', rgb: 'rgb(0, 128, 0)'},
              {color: 'blue', rgb: 'rgb(0, 0, 255)'},
              {color: 'purple', rgb: 'rgb(128, 0, 128)'}
            ], 
            color: 'red',
          };
        }

  render() {
    const colorRender = {
      backgroundColor: this.state.color
    };
    console.log('this.state.color:', this.state.color);

    if (this.state.showList){
      return (
        <section style={colorRender}>
          <Input clicked={e => this.setState({ showList: false })}/>
          <List colors={this.state.allColors} clicked={color => this.setState({color})} />
          <Slider slide={value => console.log(value)}/>
        </section>
      );
    }
    return (
     <section>
        <Input clicked={e => this.setState({showList: true})}/>
    </section>
  );
}
}

//BEYOND MVP: RGB Slider
//Hexademical input 