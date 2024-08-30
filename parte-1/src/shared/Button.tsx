import React from 'react'

const Button = ({...props}) => {
  return (
    <button {...props} className='bg-gray-500 py-2 px-4 font-bold rounded-lg'>{props.children}</button>
  )
}

export default Button
