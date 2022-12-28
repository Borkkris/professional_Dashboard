import React from 'react'

// passing in the props from Ecommerce in the { }
const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button