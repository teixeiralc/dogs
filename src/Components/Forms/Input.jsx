import React from 'react';
import styles from '../../styles/modules/Forms/Input.module.css';

const Input = ({ label, type, name, value, error, onChange, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
