import React from 'react'

import { FaArrowRight } from 'react-icons/fa6'
import './button.scss'

interface ButtonTypes{
  heading?:string;
}

const Button:React.FC<ButtonTypes> =({heading})=> {
  return (
    <div className="button">
        <button>{heading}</button>
        <FaArrowRight className="ml-3"/>
    </div>
  )
}

export default Button;