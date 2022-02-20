import React from 'react';

import styles from './Option.module.scss';

const Option = ({ letter, option }) => {
  return (
    <button className={styles.option}>
      <span className={styles.option__key}>{letter}</span>
      <span className={styles.option__value}>{option.capital[0]}</span>
    </button>
  );
};

export default Option;
