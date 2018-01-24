import React from 'react';

export default function Slider(props){
  return (
    <input type="range" min="1" max="255" onChange={e => console.log(e.currentTarget.value)}/>
  );
}

// props.slide