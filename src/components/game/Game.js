import React, { useState, useEffect } from 'react';

import styles from './Game.module.scss';

import Result from 'components/result/Result';
import Question from 'components/question/Question';

import { getRandomCountries, generateAnswer } from 'helpers/quiz';

const Game = ({ countries }) => {
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState({});
  const [answerCounter, setAnswerCounter] = useState(0);
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    setOptions(getRandomCountries([...countries]));
  }, [countries]);

  useEffect(() => {
    setAnswer(generateAnswer([...options]));
  }, [options]);

  const generateNewQuestion = () => {
    setAnswerIsCorrect(false);
    setOptions(getRandomCountries([...countries]));
  };

  const handlerSelectedOption = (option) => {
    if (option.country === answer.country) {
      setAnswerCounter((prevState) => prevState + 1);
      setAnswerIsCorrect(true);
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
      options={options}
      answer={answer}
      answerIsCorrect={answerIsCorrect}
      onValidateAnswer={handlerSelectedOption}
      onGenerateNewQuestion={generateNewQuestion}
    />
  );
};

export default Game;
