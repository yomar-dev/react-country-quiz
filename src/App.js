import { useState, useEffect } from 'react';

import Game from './components/game/Game';
import styles from './App.module.scss';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((responseData) => {
        const transformedCountries = responseData
          .filter((country) => country.capital)
          .map((country) => {
            const { capital, flags, name } = country;
            return {
              country: name.common,
              capital,
              flags,
            };
          });
        setCountries(transformedCountries);
      })
      .catch((error) => {
        console.log('error =>', error);
      });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.container__title}>Country quiz</h1>
        {countries.length && <Game countries={countries} />}
      </div>
    </main>
  );
}

export default App;
