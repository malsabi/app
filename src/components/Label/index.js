import React from 'react';
import './style.css';

function Label(props) {
  return (
    <h1 className='text_title'>{props.text}</h1>
  )
}

export default Label;