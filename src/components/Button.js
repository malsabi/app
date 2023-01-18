import React from 'react';

function Button(props) {
  return (
    <button
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        fontSize: props.fontSize,
        padding: props.padding,
        margin: props.margin,
        textAlign: props.textAlign,
        textDecoration: props.textDecoration,
        border: props.border,
        borderBottom: props.borderBottom,
        borderRadius: props.borderRadius,
        textTransform: props.textTransform
      }}
    >
      {props.backgroundColor}
    </button>
  );
}

Button.defaultProps = {
  backgroundColor: 'transparent',
  color: 'black',
  fontSize: '16px',
  padding: '1rem',
  marginTop: '6px',
  cursor: 'pointer',
  textAlign: 'center',
  textDecoration: 'none',
  border: 'none',
  borderBottom: 'solid black 1px',
  textTransform: 'capitalize'
}

export default Button;