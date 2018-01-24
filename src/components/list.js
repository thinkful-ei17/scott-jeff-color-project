import React from 'react';
import Item from './item';
import './list.css';

export default function List(props){
  return (    
    <ul className='list'>
        <Item color="red" clicked={color => props.clicked(color)}
/>
        <Item color="orange" clicked={color => props.clicked(color)}/>
        <Item color="yellow" clicked={color => props.clicked(color)}/>
        <Item color="green" clicked={color => props.clicked(color)}/>
        <Item color="blue" clicked={color => props.clicked(color)}/>
        <Item color="purple" clicked={color => props.clicked(color)}/>
    </ul>
  )
}

// onClick={e => props.clicked(e.target.color)}