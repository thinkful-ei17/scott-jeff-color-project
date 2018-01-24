import React from 'react';
import './item.css'
export default function Item(props) {

  return (
    <li onClick={e => props.clicked(props.color)}>
      {props.color}
    </li>
  );
}
