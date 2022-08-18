import React from 'react';

import { Country } from '../../types';
import styles from './Option.module.scss';

interface Props {
  letter: string;
  option: Country | null;
  answer: Country | null;
  disabled: boolean;
  selectedAnswer: Country | null;
  onSelectedOption: (selectedOption: Country | null) => void;
}

const Option = ({
  letter,
  option,
  answer,
  disabled,
  selectedAnswer,
  onSelectedOption,
}: Props) => {
  let icon = '';
  let optionClasses = `${styles.option}`;

  if (selectedAnswer) {
    if (answer?.country === option?.country) {
      optionClasses += ` ${styles['option--is-correct']}`;
      icon = 'check_circle';
    }

    if (
      selectedAnswer.country === option?.country &&
      selectedAnswer.country !== answer?.country
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
        <span className={styles.option__country}>{option?.country}</span>
        <span className={`${styles.option__icon} ${'material-icons'}`}>
          {icon}
        </span>
      </p>
    </button>
  );
};

export default Option;
