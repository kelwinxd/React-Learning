import React from 'react'
import styles from './Input.module.css'


const Input = ({name, type, label, value, onChange, error, onBlur}) => {
  return (
    <div>
        <label htmlFor={name} className={styles.label}>
          {label}:
          </label>
        <input type={type} name={name} id={name} className={styles.input} value={value} onChange={onChange} onBlur={onBlur} />
        {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  )
}

export default Input