import React from 'react';

import styles from './Game.module.scss';

import Option from 'components/option/Option';
import { ReactComponent as AdventureImage } from 'assets/adventure.svg';

const options = [
  { key: 'a', value: 'Vietnam' },
  { key: 'b', value: 'Malaysia' },
  { key: 'c', value: 'Sweden' },
  { key: 'd', value: 'Austria' },
];

const Game = () => {
  return (
    <section className={styles.card}>
      <h2 className={styles.card__title}>Kuala Lumpur is the capital of</h2>

      {options.map((option, index) => (
        <div className={styles.card__option}>
          <Option key={index} letter={option.key} value={option.value} />
        </div>
      ))}

      <picture className={styles.card__image}>
        <AdventureImage />
      </picture>
    </section>
  );
};

export default Game;
