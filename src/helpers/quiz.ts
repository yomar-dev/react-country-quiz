import { Country } from '../types';

export function getRandomCountries(countries: Country[]) {
  const totalCountries = countries.length;
  const randomCountries: Country[] = [];
  let uniqueNumbers: number[] = [];

  while (uniqueNumbers.length < 4) {
    const randomNumbers = generateRandomNumbers(totalCountries);
    uniqueNumbers = [...randomNumbers];
  }

  for (let num of uniqueNumbers) {
    randomCountries.push(countries[num]);
  }

  return randomCountries;
}

export function generateAnswer(countries: Country[]) {
  const num = Math.floor(Math.random() * 4);
  return countries[num];
}

function generateRandomNumbers(numMax: number) {
  const randomNumbers = [];
  for (let i = 0; i < 4; i++) {
    const num = Math.floor(Math.random() * numMax);
    randomNumbers.push(num);
  }
  return randomNumbers;
}
