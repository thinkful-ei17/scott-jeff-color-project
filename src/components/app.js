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
              {color: 'red', rgb: {red: 255, green:0, blue: 0}},
              {color: 'orange', rgb:{red: 255, green:165, blue: 0}},
              {color: 'yellow', rgb: {red: 255, green:255, blue: 0}},
              {color: 'green', rgb: {red: 0, green:128, blue: 0}},
              {color: 'blue', rgb: {red: 0, green:0, blue: 255}},
              {color: 'purple', rgb: {red: 128, green:0, blue: 128}}
            ], 
            color: {red: 255, green:100, blue: 100}
          };
        }

  render() {
    const colorRender = {
      backgroundColor: `rgb(${this.state.color.red}, ${this.state.color.green}, ${this.state.color.blue})`
    };
    console.log('this.state.color:', this.state.color);

    if (this.state.showList){
      return (
        <section className='colorMenu'>
          <div className='colorSquare' style={colorRender}>
            <Input clicked={e => this.setState({ showList: false })}/>
            <List colors={this.state.allColors} clicked={color => this.setState({color})} />
          </div>
          <div className='sliderSection'>
            <Slider slide={value => this.setState({color:{...this.state.color, red:value}})}/>
          </div>
        </section>
      );
    }
    return (
     <section className='colorSquare'>
        <Input clicked={e => this.setState({showList: true})}/>
    </section>
  );
}
}