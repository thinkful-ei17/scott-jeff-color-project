import React from 'react';

export default function Slider(props){
  return (
    <div>
    <input type="range" min="1" max="255" onChange={e => console.log(e.currentTarget.value)}/>
    <input type="range" min="1" max="255" onChange={e => console.log(e.currentTarget.value)}/>
    <input type="range" min="1" max="255" onChange={e => console.log(e.currentTarget.value)}/>
    </div>
  );
}

// props.slide