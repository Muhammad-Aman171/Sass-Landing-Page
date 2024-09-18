import React from 'react'

import { FaArrowRight } from 'react-icons/fa6'
import './button.scss'

interface ButtonTypes{
  style?:string;
  heading?:string;
}

const Button:React.FC<ButtonTypes> =({style,heading})=> {
  return (
    <div className={`${style} button`}>
        <button>{heading}</button>
        <FaArrowRight className="arrow ml-3"/>
    </div>
  )
}

export default Button;