import React from 'react';
import styles from '../../styles/modules/Forms/Button.module.css';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.btn} type="submit">
      {children}
    </button>
  );
};

export default Button;
