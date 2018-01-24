import React from 'react';
import Input from './input';
import List from './list';
import Item from './item';

import './app.css';

export default class App extends React.Component {
    
  constructor(props){
          super (props);
          this.state = {
            showList: false,
            color: 'red'
          };
        }

  render() {
    const colorRender = {
      backgroundColor: this.state.color
    };

    if (this.state.showList){
      return (
        <section style={colorRender}>
          <Input clicked={e => this.setState({ showList: false })}/>
          <List clicked={color => this.setState({color})} />
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