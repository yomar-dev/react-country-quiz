import React, { useState } from 'react';

import styles from './Question.module.scss';

import Option from '../option';
import { Country } from '../../types';
import { ReactComponent as AdventureImage } from '../../assets/adventure.svg';

const LETTERS = ['A', 'B', 'C', 'D'];

interface Props {
  options: Country[];
  answer: Country | null;
  onValidateAnswer: (selectedAnswer: Country | null) => void;
}

const Question = ({ options, answer, onValidateAnswer }: Props) => {
  const [isActiveButton, setIsActiveButton] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<Country | null>(null);

  const selectedOptionHandler = (selectedOption: Country | null) => {
    if (!isActiveButton) {
      setIsActiveButton(true);
      setSelectedAnswer(selectedOption);
    }
  };

  const nextQuestionHandler = () => {
    onValidateAnswer(selectedAnswer);
    setIsActiveButton(false);
    setSelectedAnswer(null);
  };

  return (
    <section className={styles.card}>
      <h2 className={styles.card__title}>
        <span className={styles['card__title--highlight']}>
          {answer?.capital}
        </span>{' '}
        is the capital of
      </h2>

      {options.map((option, index) => (
        <div className={styles.card__option} key={option.country}>
          <Option
            letter={LETTERS[index]}
            option={option}
            answer={answer}
            disabled={isActiveButton}
            selectedAnswer={selectedAnswer}
            onSelectedOption={selectedOptionHandler}
          />
        </div>
      ))}

      <button
        className={styles.card__button}
        disabled={!isActiveButton}
        onClick={nextQuestionHandler}
      >
        Next
      </button>

      <picture className={styles.card__image}>
        <AdventureImage />
      </picture>
    </section>
  );
};

export default Question;
