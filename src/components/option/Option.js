import React from 'react';

import styles from './Option.module.scss';

const Option = ({
  letter,
  option,
  answer,
  disabled,
  selectedAnswer,
  onSelectedOption,
}) => {
  let optionClasses = `${styles.option}`;

  if (selectedAnswer) {
    if (answer.country === option.country) {
      optionClasses += ` ${styles['option--is-correct']}`;
    }

    if (
      selectedAnswer.country === option.country &&
      selectedAnswer.country !== answer.country
    ) {
      optionClasses += ` ${styles['option--is-incorrect']}`;
    }
  }

  return (
    <button
      className={optionClasses}
      onClick={() => onSelectedOption(option)}
      disabled={disabled}
    >
      <p className={styles.option__content}>
        <span className={styles.option__key}>{letter}</span>
        {option.country}
      </p>
    </button>
  );
};

export default Option;
