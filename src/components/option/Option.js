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
  let icon = '';
  let optionClasses = `${styles.option}`;

  if (selectedAnswer) {
    if (answer.country === option.country) {
      optionClasses += ` ${styles['option--is-correct']}`;
      icon = 'check_circle';
    }

    if (
      selectedAnswer.country === option.country &&
      selectedAnswer.country !== answer.country
    ) {
      optionClasses += ` ${styles['option--is-incorrect']}`;
      icon = 'highlight_off';
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
        <span className={styles.option__country}>{option.country}</span>
        <span className={`${styles.option__icon} ${'material-icons'}`}>
          {icon}
        </span>
      </p>
    </button>
  );
};

export default Option;
