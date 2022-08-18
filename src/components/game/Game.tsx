import React, { useState, useEffect } from 'react';

import Result from '../result';
import Question from '../question';

import { Country } from '../../types';
import { getRandomCountries, generateAnswer } from '../../helpers/quiz';

interface Props {
  countries: Country[];
}

const Game = ({ countries }: Props) => {
  const [options, setOptions] = useState<Country[]>([]);
  const [answer, setAnswer] = useState<Country | null>(null);
  const [answerCounter, setAnswerCounter] = useState<number>(0);
  const [endGame, setEndGame] = useState<boolean>(false);

  useEffect(() => {
    setOptions(getRandomCountries([...countries]));
  }, [countries]);

  useEffect(() => {
    setAnswer(generateAnswer([...options]));
  }, [options]);

  const generateNewQuestion = () => {
    setOptions(getRandomCountries([...countries]));
  };

  const handlerSelectedOption = (selectedAnswer: Country | null) => {
    if (selectedAnswer?.country === answer?.country) {
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
