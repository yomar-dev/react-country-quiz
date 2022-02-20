import React, { useState, useEffect } from 'react';

import styles from './Game.module.scss';

import Option from 'components/option/Option';
import { ReactComponent as AdventureImage } from 'assets/adventure.svg';

import { getRandomCountries, generateAnswer } from 'helpers/quiz';

const LETTERS = ['A', 'B', 'C', 'D'];

const Game = ({ countries }) => {
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState({});

  useEffect(() => {
    setOptions(getRandomCountries([...countries]));
  }, [countries]);

  useEffect(() => {
    setAnswer(generateAnswer([...options]));
  }, [options]);

  if (!options || !answer) {
    return <section className={styles.card}>Loading...</section>;
  }

  return (
    <section className={styles.card}>
      <h2 className={styles.card__title}>{answer.capital} is the capital of</h2>

      {options.map((option, index) => (
        <div className={styles.card__option} key={option.country}>
          <Option letter={LETTERS[index]} option={option} />
        </div>
      ))}

      <picture className={styles.card__image}>
        <AdventureImage />
      </picture>
    </section>
  );
};

export default Game;
