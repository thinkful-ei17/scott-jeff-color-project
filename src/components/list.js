import React from 'react';
import Item from './item';
import './list.css';

export default function List(props){

  const items = props.colors.map((item, index) => <Item key={index} name={item.color} color={item.rgb} clicked={color => props.clicked(color)}/>);
  
  return (   
    <ul className='list'>
        {items}
    </ul>
  )
}

