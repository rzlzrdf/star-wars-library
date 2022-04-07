import React from 'react'
import style from './header.module.css'

const Header = () => {
  return (
    <img src='./images/logo.png' alt='star-wars' className={style.logo} />
  )
}

export default Header