import React from 'react';

import styles from './Result.module.scss';
import { ReactComponent as WinnersImage } from '../../assets/winners.svg';

interface Props {
  score: number;
  onResetGame: () => void;
}

const Result = ({ score, onResetGame }: Props) => {
  return (
    <section className={styles.card}>
      <picture className={styles.card__image}>
        <WinnersImage />
      </picture>

      <h2 className={styles.card__title}>Results</h2>
      <p className={styles.card__text}>
        You got <span className={styles.card__score}>{score}</span> correct
        answers
      </p>

      <button className={styles.card__button} onClick={onResetGame}>
        Try again
      </button>
    </section>
  );
};

export default Result;
