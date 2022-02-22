import React from 'react';

import styles from './Option.module.scss';

const Option = ({
  letter,
  option,
  answer,
  selectedAnswer,
  answerIsCorrect,
  onSelectedOption,
}) => {
  let optionClasses = `${styles.option}`;

  if (
    answer?.country === option.country &&
    answer?.country === selectedAnswer?.country
  ) {
    optionClasses += ` ${styles['option--is-correct']}`;
  }

  if (
    selectedAnswer?.country === option.country &&
    selectedAnswer?.country !== answer?.country
  ) {
    optionClasses += ` ${styles['option--is-incorrect']}`;
  }

  const selectOptionHandler = () => {
    onSelectedOption(option);
  };

  return (
    <button
      className={optionClasses}
      onClick={selectOptionHandler}
      disabled={answerIsCorrect}
    >
      <span className={styles.option__key}>{letter}</span>
      <span className={styles.option__value}>{option.country}</span>
    </button>
  );
};

export default Option;
