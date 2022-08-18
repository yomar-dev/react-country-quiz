import { useState, useEffect } from 'react';

import Game from './components/game';
import styles from './App.module.scss';

import { Country } from './types';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((responseData) => {
        const transformedCountries: Country[] = responseData
          .filter((country: any) => country.capital)
          .map((country: any) => {
            const { capital, flags, name } = country;
            let tempCountry: Country = {
              country: name.common,
              capital,
              flags,
            };
            return tempCountry;
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
        {!countries.length ? (
          <p className={styles.container__loading}>Loading...</p>
        ) : (
          <>
            <h1 className={styles.container__title}>Country quiz</h1>
            <Game countries={countries} />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
