import React from 'react';
import Input from './input';
import List from './list';

export default class App extends React.Component {
    
  constructor(props){
          super (props);
          this.state = {
            showList: false
          };
        }
  render (){
    if (this.state.showList){
      return (
        <section>
          <Input />
          <List />
        </section>
      );
    }
    return (
     <section>
      <Input />
    </section>
  );
}
}