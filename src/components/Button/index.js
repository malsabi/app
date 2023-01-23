import React, {useState} from 'react';
import './style.css';

function Button(props) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  const style = {
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: '16px',
    fontWeight: 'normal',
    padding: '1rem',
    margin: '0 1rem 0 1rem',
    marginTop: '0',
    marginBottom: '0',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    border: 'none',
    borderBottom: hover ? 'solid 1px black' : 'none',
    textTransform: 'capitalize'
  }
  return (
    <button
      className='Button'
      style={style}
      onMouseEnter = {handleMouseEnter}
      onMouseLeave = {handleMouseLeave}
    >
      {props.text}
    </button>
  );
}

export default Button;