import React from 'react'
import styles from './image.css'

export default function Image({ children }) {
  return (<div className={styles.myImage}>{children}</div>)
}
