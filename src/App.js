import Game from './components/game/Game';
import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.container__title}>Country quiz</h1>
        <Game />
      </div>
    </main>
  );
}

export default App;
