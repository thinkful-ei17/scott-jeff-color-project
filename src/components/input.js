import React from 'react';
import './input.css';

export default function Input(props) {
  return (
    <h2 onClick={e => props.clicked(e)}>
      <a href='#'>Pick a color:</a>
    </h2>   
  )
}