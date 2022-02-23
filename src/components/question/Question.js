import React, { useState } from 'react';

import styles from './Question.module.scss';

import Option from 'components/option/Option';
import { ReactComponent as AdventureImage } from 'assets/adventure.svg';

const LETTERS = ['A', 'B', 'C', 'D'];

const Question = ({ options, answer, onValidateAnswer }) => {
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const selectedOptionHandler = (selectedOption) => {
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
        {answer?.capital} is the capital of
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
