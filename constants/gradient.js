import React from 'react';


const gradient = () => {
  return (
    <svg>
          <defs>
          <linearGradient
        id="myGradient"
        x1="0%"
        x2="100%"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="red" />
        <stop offset="25%" stopColor="orange" />
        <stop offset="50%" stopColor="gold" />
        <stop offset="75%" stopColor="yellow" />
        <stop offset="100%" stopColor="green" />
      </linearGradient>
          </defs>
        </svg>
  )
}
export default gradient;