import React from 'react'

    const Button = ({style, text, funcao}) => {
  return (
    <button onClick={funcao} className={style}>{text}</button>
  )
}

export default Button