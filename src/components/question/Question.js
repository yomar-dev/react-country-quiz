import React from 'react';

import styles from './Question.module.scss';

import Option from 'components/option/Option';
import { ReactComponent as AdventureImage } from 'assets/adventure.svg';

const LETTERS = ['A', 'B', 'C', 'D'];

const Question = ({
  options,
  answer,
  selectedAnswer,
  answerIsCorrect,
  onValidateAnswer,
  onGenerateNewQuestion,
}) => {
  return (
    <section className={styles.card}>
      <h2 className={styles.card__title}>{answer.capital} is the capital of</h2>

      {options.map((option, index) => (
        <div className={styles.card__option} key={option.country}>
          <Option
            letter={LETTERS[index]}
            option={option}
            answer={answer}
            selectedAnswer={selectedAnswer}
            answerIsCorrect={answerIsCorrect}
            onSelectedOption={onValidateAnswer}
          />
        </div>
      ))}

      <button
        className={styles.card__button}
        disabled={!answerIsCorrect}
        onClick={onGenerateNewQuestion}
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
