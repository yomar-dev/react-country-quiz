import React, { useState, useEffect } from 'react';

import styles from './Game.module.scss';

import Result from 'components/result/Result';
import Question from 'components/question/Question';

import { getRandomCountries, generateAnswer } from 'helpers/quiz';

const Game = ({ countries }) => {
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState({});
  const [answerCounter, setAnswerCounter] = useState(0);
  const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    setOptions(getRandomCountries([...countries]));
  }, [countries]);

  useEffect(() => {
    setAnswer(generateAnswer([...options]));
  }, [options]);

  const generateNewQuestion = () => {
    setOptions(getRandomCountries([...countries]));
  };

  const handlerSelectedOption = (selectedAnswer) => {
    if (selectedAnswer.country === answer.country) {
      setAnswerCounter((prevState) => prevState + 1);
      generateNewQuestion();
    } else {
      setEndGame(true);
    }
  };

  const resetGameHandler = () => {
    setEndGame(false);
    setAnswerCounter(0);
    generateNewQuestion();
  };

  if (!options || !answer) {
    return <section className={styles.card}>Loading...</section>;
  }

  if (endGame) {
    return <Result score={answerCounter} onResetGame={resetGameHandler} />;
  }

  return (
    <Question
      answer={answer}
      options={options}
      onValidateAnswer={handlerSelectedOption}
    />
  );
};

export default Game;
