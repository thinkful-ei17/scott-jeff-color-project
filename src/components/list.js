import React from 'react';
import Item from './item';

export default function List(props){
  return (
    <ul className='list'>
        <Item color="red"/>
        <Item color="orange"/>
        <Item color="yellow"/>
        <Item color="green"/>
        <Item color="blue"/>
        <Item color="purple"/>
    </ul>

  )
}