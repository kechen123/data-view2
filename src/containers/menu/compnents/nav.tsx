import React, { useState } from 'react'
import { menu, nav, ehartOption } from '@config/menu'
import styles from './nav.module.less'
const Nav = () => {
  const getNav = () => {
    return nav.map((item, index) => {
      return (
        <div className={styles.item} key={index}>
          <i className={`iconfont ${item.icon} `}></i>
        </div>
      )
    })
  }
  return <>{getNav()}</>
}
export default Nav
