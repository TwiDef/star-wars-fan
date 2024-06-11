import { useSelector } from 'react-redux';
import CharactersPage from './pages/characters-page';
import Loader from './components/Loader/Loader';

import styles from './App.module.css';
import Header from './components/Header/Header';

function App() {
  const { charactersList } = useSelector(state => state.characters)

  return (
    <main className={styles.container}>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>

      <div className={styles.wrapper}>
        <Header />
        <CharactersPage />
      </div>
    </main>
  );
}

export default App;
