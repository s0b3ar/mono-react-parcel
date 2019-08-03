import React from 'react'
import cn from 'classnames'
import styles from './button.css'

export default function Button({ children, green }) {
  return (
    <button className={cn(styles.btn, { [styles.green]: green })}>
      {children}
    </button>
  )
}
