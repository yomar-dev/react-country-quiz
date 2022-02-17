import React from 'react';

import styles from './Option.module.scss';

const Option = ({ letter, value }) => {
  return (
    <button className={styles.option}>
      <span className={styles.option__key}>{letter}</span>
      <span className={styles.option__value}>{value}</span>
    </button>
  );
};

export default Option;
