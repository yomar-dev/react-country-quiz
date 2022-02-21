import React from 'react';

import styles from './Option.module.scss';

const Option = ({ letter, option, onSelectedOption }) => {
  return (
    <button className={styles.option} onClick={() => onSelectedOption(option)}>
      <span className={styles.option__key}>{letter}</span>
      <span className={styles.option__value}>{option.country}</span>
    </button>
  );
};

export default Option;
