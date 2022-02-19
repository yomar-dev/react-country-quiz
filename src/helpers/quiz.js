export function getRandomCountries(countries) {
  const totalCountries = countries.length;
  const randomCountries = [];
  let uniqueNumbers = [];

  while (uniqueNumbers.length < 4) {
    const randomNumbers = generateRandomNumbers(totalCountries);
    uniqueNumbers = [...new Set(randomNumbers)];
  }

  for (let num of uniqueNumbers) {
    randomCountries.push(countries[num]);
  }

  return randomCountries;
}

export function generateAnswer(countries) {
  const num = Math.floor(Math.random() * 4);
  return countries[num];
}

function generateRandomNumbers(numMax) {
  const randomNumbers = [];
  for (let i = 0; i < 4; i++) {
    const num = Math.floor(Math.random() * numMax);
    randomNumbers.push(num);
  }
  return randomNumbers;
}
