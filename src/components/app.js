import React from 'react';
import Input from './input';
import List from './list';
import Item from './item';

export default class App extends React.Component {
    
  constructor(props){
          super (props);
          this.state = {
            showList: false,
            color: 'red'
          };
        }

  render() {

    if (this.state.showList){
      return (
        <section>
          <Input clicked={e => this.setState({ showList: false })}/>
          <List clicked={color => console.log(color)} />
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